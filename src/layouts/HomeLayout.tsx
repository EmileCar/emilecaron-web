
import { Header, Hero, Page, PageContent } from "carone-react";
import HeaderTitle from "../components/headertitle/HeaderTitle";
import { links } from "./links";

interface PageLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FC<PageLayoutProps> = ({ children }) => {

    return (
        <Page className="page">
            <Header sticky title={<HeaderTitle />} className="header" responsiveAt={880} links={links}/>
            <Hero />
            <PageContent>
                {children}
            </PageContent>
        </Page>
    );
};

export default HomeLayout;
