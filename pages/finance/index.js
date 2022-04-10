import {Header, Layout} from "@/components";
import  dataChart from "@/pages/finance/chart-dynamicbarchart";
export default function homeFinance(){
  return <>
    <Layout>
      <Header/>
      <div>
        <h1>Finance</h1>
        <p>
          This is the finance page.
          <dataChart/>
        </p>
      </div>
    </Layout>
  </>
}
