import {Header, Layout} from "@/components";
import DataChart from "@/pages/finance/chart-dynamicbarchart";
export default function homeFinance(){
  return <>
    <Layout>
      <Header/>
      <div>
        <h1>Finance</h1>
        <DataChart/>
      </div>
    </Layout>
  </>
}
