import { Header, Layout} from "@/components";
import Wellcome from "@/components/wellcome";

function homePage() {
    return (
        <Layout>
            <Header />
            <Wellcome />
        </Layout>
    );
}

export default homePage;
