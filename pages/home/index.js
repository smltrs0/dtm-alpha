import { Header, Layout} from "@/components";
import Welcome from "@/components/welcome";

function homePage() {
    return (
        <Layout>
            <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet"></link>
            <Header />
            <Welcome />
        </Layout>
    );
}

export default homePage;
