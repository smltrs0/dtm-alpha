import {Header, Layout} from "@/components";
import LineChart from "@/pages/finance/chart-dynamicbarchart";
export default function homeFinance(){
  return <>
    <Layout>
      <Header/>
      <div>
        <h1>Finance</h1>
        <LineChart/>
      </div>
    </Layout>
  </>
}
