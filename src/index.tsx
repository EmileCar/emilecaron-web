
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'carone-react/resources/reset.css'
import './index.css';
import App from './App';
import global_ned from './assets/languages/ned/global.json';
import global_eng from './assets/languages/eng/global.json';
import projects_ned from './assets/languages/ned/projects.json';
import projects_eng from './assets/languages/eng/projects.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'ned',
    resources: {
        ned: {
            global: global_ned,
            projects: projects_ned
        },
        eng: {
            global: global_eng,
            projects: projects_eng
        }
    }
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
);
