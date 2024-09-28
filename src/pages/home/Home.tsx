
import React from 'react';
import './Home.css';
import PageLayout from '../../layouts/Layout';
import { Section } from 'carone-react';

const Home = () => {
    return (
        <PageLayout>
            <Section centered>
                <h1>Welcome to your new Carone React App!</h1>
                <div>
                    <p>All necessary configurations have been set up for you. You can start building your app right away.</p>
                    <p>This is the Homepage, you can edit it in <code>src/pages/Home/Home.tsx</code></p>
                    <p>A PageLayout has also been created for you in <code>src/layouts/Layout.tsx</code></p>
                </div>
                <p>To customize your app, please change the values of the <code>config</code> object in <code>src/caroneConfig.ts</code></p>
            </Section>
        </PageLayout>
    );
};

export default Home;
