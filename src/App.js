import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import store from './store/store';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Footer />
        <Cart />
        <ScrollToTop />
      </Provider>
    </>
  );
};

export default App;

