import About from './pages/about/About';

import { CaroneProvider } from 'carone-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { config } from './caroneConfig';

const App = () => {

  return (
    <CaroneProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
</Routes>
      </BrowserRouter>
    </CaroneProvider>
  );
}

export default App;
