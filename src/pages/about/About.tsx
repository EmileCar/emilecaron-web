
import React from 'react';
import './About.css';
import PageLayout from '../../layouts/Layout';
import { Section } from 'carone-react';

const About = () => {
    return (
        <PageLayout>
            <Section centered>
                <h1>Welcome to the About page!</h1>
                <p>This is the About page. You can edit it in <code>src/pages/About/About.tsx</code>.</p>
            </Section>
        </PageLayout>
    );
};

export default About;
