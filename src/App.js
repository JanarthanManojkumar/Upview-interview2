import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { createContext, useState } from 'react';
import { Preview } from './components/Preview';
import { number } from 'yup';

export const Appcontext = createContext();

const queryClient = new QueryClient(); 

function App() {
  const [products, setProducts] = useState([]);
  const [navitems, setNavitems] = useState(null);
  const [cart, setCart] = useState([]);
  const [select, setSelect] = useState([]);

  return (
    <div className="bg-white max-w-[1240px] mx-auto">
      <QueryClientProvider client={queryClient}>
        <Appcontext.Provider value={{ 
          products, setProducts, 
          navitems, setNavitems, 
          cart, setCart, 
          select, setSelect 
        }}>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path={'/preview'} element={<Preview />} /> 
            </Routes>
          </BrowserRouter>
        </Appcontext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
