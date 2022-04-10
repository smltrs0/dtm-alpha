export function getPrice() {
    return new Promise((resolve, reject) => {
        try {
            fetch('https://api.mir4global.com/wallet/prices/draco/lastest', {
                method: 'POST',
            })
                .then(response => response.json())
                .then(responseJson => {
                    resolve(responseJson);
                })

        } catch (error) {
            reject(error);
        }
    });
}

function actualizarDatos({ label = '', data }) {

    var currentdate = new Date();
    var datetime = currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    addData(myChart, datetime, data)
}

setInterval(async () => {
    let result = await getPrice();
    if (parseInt(result.Code) === 200) {
        actualizarDatos({ data: result.Data})

    } else {
        console.error('Error no se ha podido realizar la solicitud a la pagina solicitada');
    }
}, 4000);


function addData(chart, label, data) {

    if (chart.data.labels.length >= 600) {
        chart.data.labels.shift();

        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
        chart.data.datasets[2].data.shift();
    }

    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data.USDDracoRate);
    chart.data.datasets[1].data.push(data.USDKLAYRate);
    chart.data.datasets[2].data.push(data.USDWemixRate);

    // updatePrediction(data.USDDracoRate);
    chart.update();
}