import About from './pages/about/About';

import { CaroneProvider } from 'carone-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { config } from './caroneConfig';
import { ActivityProvider } from './contexts/ActivityContext';

const App = () => {

  return (
    <CaroneProvider config={config}>
      <ActivityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ActivityProvider>
    </CaroneProvider>
  );
}

export default App;
