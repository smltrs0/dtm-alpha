import React, {Component} from 'react';
import Chart from 'chart.js/auto';
import {getPrice} from "@/services/finance/WemixValues";

export default class LineChart extends Component {
    constructor() {
        super(undefined);
          setInterval(async () => {
              let result = await getPrice();
              this.actualizarDatos({ data: result.Data})
          }, 60000);
  }

    chartRef = React.createRef();
    addData(chart, label, data) {
        const [Draco, Klay, Wemix] = chart.data.datasets

            if (chart.data?.labels.length >= 600) {
                chart.data.labels.shift();
                Draco.data.shift();
                Klay.data.shift();
                Wemix.data.shift();
            }

            chart.data.labels.push(label);
            Draco.data.push(data.USDDracoRate);
            Klay.data.push(data.USDKLAYRate);
            Wemix.data.push(data.USDWemixRate);
            chart.update();

    }

    actualizarDatos({ label = '', data }) {

        const currentDate = new Date();
        const datetime =  `${currentDate.getHours()} : ${currentDate.getMinutes()}: ${currentDate.getSeconds()}`;
        this.addData(this.chart, datetime, data)
    }




    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");

        this.chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    label: "Draco",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: false,
                },{
                    data: [],
                    label: "Klay",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    fill: false,
                },{
                    data: [],
                    label: "Wemix",
                    borderColor: "#ffa500",
                    backgroundColor:"#ffc04d",
                    fill: false,
                }]
            }
        });
    }

    render() {
        return (
            <>
                <div className="card" style={{ backgroundColor: '#252836', borderRadius: '0.5em' }}>
                    <div className="alert alert-warning text-center" style={{borderRadius: '0.5em'}}>Server update time default value is 1 minute due to wemade service restrictions</div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Price to trigger alert" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Draco</option>
                                        <option>KLAY</option>
                                        <option>Wemix</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <canvas
                            id="myChart"
                            ref={this.chartRef}
                        />
                    </div>
                </div>
                <div className="card mt-2 mb-5" style={{ backgroundColor: '#252836', borderRadius: '0.5em' }}>
                    <div className="card-header">
                        Config <i>eye-icon</i>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Rate time update</label>
                            <input type="number" step={1}  className="form-control" placeholder="Rate time update" />
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox" />
                                <span className="ml-2">Play sound</span>
                            </label>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
