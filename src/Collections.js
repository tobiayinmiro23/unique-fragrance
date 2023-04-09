import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import product from './data'
import './perfume.css'
import './collections.css'

const Collections = ({page,getProductId}) => {
    const [cartCount, setcartCount] = useState(0)
    let list;
    useEffect(()=>{
      list= JSON.parse(localStorage.getItem('cartId'))
          setcartCount(list?.length)
   },[])
    list= JSON.parse(localStorage.getItem('cartId'))
    const handleCard=(item)=>{
        getProductId(item)
        page('product')
    }
    let cartNumber=0
    let memory = new Set
    const handleButton=(id)=>{
    let cartCount=document.querySelectorAll('.cartCount')[0]
        let a=memory.has(id)
        if(a=== false){
            memory.add(id)
        }
        
        let cartId=[]
        let memory2=new Set
        list.forEach(item=>{
          memory2.add(item)
        })
        memory.forEach(item=>{
          memory2.add(item)
        })
        memory2.forEach(item=>{
          cartId.push(item)
        })
        setcartCount(cartId.length)
      localStorage.setItem('cartId',JSON.stringify(cartId))

}
  return (
    <div className='Perfume'>
        <section class="collections">
          <header>
              <div></div>
              <h1>Collections</h1>
              <Link to="/cart">
                <div class="cartContainer" onClick={()=>page('cart')}>
                    {/* <div class="cart"><img src="/image/shopping-cart (2).png" alt="" /></div> */}
                    <div class="cart"><img src="/image/shopping-cart (1).png" alt="" /></div>
                    <p class="cartCount">{cartCount}</p>
                </div>
              </Link>

              
          </header>
        <div class="cardContainer">
            {
                product.map(item=>{
                   return <div class="card"  key={item.id}>
                      <Link to={'/product/'+item.id}>
                        <div  onClick={()=>handleCard(item.id)} class="cardinfo" id="c1">
                              <div class="cardimg"><img src={item.productimage1} alt="unavailable"/></div>
                              <div class="productinfo">
                                  <h3 class="productname">{item.productname}</h3>
                                  <div class="price">
                                  <p>&#8358;</p>
                                  <p>{item.productprice.toLocaleString()}</p>
                                  </div>
                              </div>
                        </div>
                      </Link>
                            <div class="btnContainer"><button onClick={()=>handleButton(item.id)} >Add to cart</button></div>
                    </div>
                })
            }
        </div>
    </section>
    </div>
  )
}

export default Collections