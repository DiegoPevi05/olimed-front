import {Suspense} from 'react';
import Providers from './components/Providers';
import Home from './pages';
import Products from './pages/productlist';
import ProductDetail from './pages/product';
import NewsList from './pages/newslist';
import NewsDetail from './pages/newsDetail';
import  LoadingComponent from './components/ui/Loader';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Suspense fallback={<LoadingComponent isLoading={true}/>}>
      <Providers>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<ProductDetail/>} />
            <Route path='/news' element={<NewsList/>} />
            <Route path='/news/:id' element={<NewsDetail/>} />
          </Routes>
        </Router>
      </Providers>
    </Suspense>
  )
}

export default App
