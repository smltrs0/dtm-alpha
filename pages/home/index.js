import { Header, Layout} from "@/components";
import Welcome from "@/components/welcome";

function homePage() {
    return (
        <Layout>
            <Header />
            <Welcome />
        </Layout>
    );
}

export default homePage;
