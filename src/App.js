import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Checkout from './Checkout';
import Collections from './Collections';
import Perfume from './Perfume';
import Product from './Product';
import Payment from './Payment';
function App() {
  const [page, setpage] = useState('home')
  const [cid, setcid] = useState('')
  const [total, settotal] = useState(0)
  const [paymentLink, setpaymentLink] = useState('')
  const handlePage=(item)=>{
      setpage(item)
  }
  const getProductId=(item)=>{
      setcid(item)
  }
  const getTotal=(item)=>{
      settotal(item)
  }
  const getPaymentLink=(item)=>{
    setpaymentLink(item)
  }
  console.log(total)
  console.log(paymentLink)
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route element={<Perfume getProductId={getProductId}  page={handlePage}/> } path="/"/>
            <Route element={<Cart page={handlePage} getTotal={getTotal}/>} path='/cart'/>
            {/* <Route element={<Product page={handlePage} id={id}/>} path="/product"/> */}
            <Route element={<Product page={handlePage} cid={cid}/>} path="/product/:id"/>
            <Route element={<Collections  getProductId={getProductId} page={handlePage} />} path="/collections"/>
            <Route element={<Checkout page={handlePage} getPaymentLink={getPaymentLink}/>} path="/checkout"/>
            <Route element={<Payment page={handlePage} paymentLink={paymentLink}/>} path="/payment"/>
          </Routes >
      </Router>
        {page==='payment' && <Payment page={handlePage} paymentLink={paymentLink}/>}

         {/* {page==='' && <Perfume getProductId={getProductId}  page={handlePage}/>}
          {page==='cart' && <Cart page={handlePage} getTotal={getTotal}/>}
          {page==='product' && <Product page={handlePage} id={id}/>}
          {page==='collections' && <Collections  getProductId={getProductId} page={handlePage} />}
          {page==='checkout' && <Checkout page={handlePage} getPaymentLink={getPaymentLink}/>}
          {page==='payment' && <Payment page={handlePage} paymentLink={paymentLink}/>} */}
    </div>
  );
}

export default App;
