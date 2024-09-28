
import { Header, Page, PageContent } from "carone-react";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {

    return (
        <Page>
            <Header sticky title="Carone React" responsiveAt={700}/>
            <PageContent>
                {children}
            </PageContent>
        </Page>
    );
};

export default PageLayout;
