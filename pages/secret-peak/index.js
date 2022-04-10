import {Header, Layout} from "@/components";
import MapSecretPeak from "@/pages/secret-peak/components/map-secret-peak";
import {BosstData} from "@/pages/secret-peak/config/BosData";
import BossesList from "@/pages/secret-peak/components/BossesList";

export default function secretPeak() {
    return <>
        <Layout>
            <Header/>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <h1>Secret peak</h1>
                        <div className="col-10">
                            <MapSecretPeak/>
                        </div>
                        <div className="col-2">
                            <BossesList bosses={BosstData}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
}
