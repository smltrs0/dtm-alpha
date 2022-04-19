import {Header, Layout} from "@/components";
import MapSecretPeak from "@/pages/secret-peak/components/map-secret-peak";
import {BosstData} from "@/pages/secret-peak/config/BosData";
import BossesList from "@/pages/secret-peak/components/BossesList";

export default function secretPeak() {
    return <>
        <Layout>
            <Header/>
            <div className="container mt-3">
                <div className="card" style={{backgroundColor : '#252836', borderRadius: '0.5em'}}>
                    <div className="text-center pt-3">
                        <h3>Secret peak</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-10">
                                <MapSecretPeak/>
                            </div>
                            <div className="col-2">
                                <BossesList bosses={BosstData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
}
