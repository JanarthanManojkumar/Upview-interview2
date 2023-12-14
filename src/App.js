import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { ApiFetch } from './components/ApiFetch';
import { createContext, useState } from 'react';

export const Appcontext = createContext();

const queryClient = new QueryClient(); 

function App() {
  const [products, setProducts] = useState([]);
  const [navitems, setNavitems] = useState(null);

  const client = new QueryClient();
  
  return (
    <div className="bg-white max-w-[1240px] mx-auto">
      <QueryClientProvider client={queryClient}>
        <Appcontext.Provider value={{ setProducts, setNavitems, products, navitems }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/apifetch' element={<ApiFetch />} />
            </Routes>
          </BrowserRouter>
        </Appcontext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
