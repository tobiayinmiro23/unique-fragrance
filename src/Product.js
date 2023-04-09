import React,{useEffect,useState} from 'react'
import  product  from "./data.js"
import './product.css'
import { useParams,Link } from 'react-router-dom'
const Product = ({cid}) => {
  const [invalidID, setinvalidID] = useState(false)
  const [productInformation, setproductInformation] = useState([])
 const data=useParams()
 let list;
 let validID;
const getProductInformation=()=>{
  let a = product.filter(item=>{
    return item.id===data.id
   })
   setproductInformation(a)
}
list= JSON.parse(localStorage.getItem('cartId'))
useEffect(()=>{
         getProductInformation()
         let cartCount=document.querySelectorAll('.cartCount')[0]
         cartCount.innerHTML=list?.length || 0
         validID= product.filter(item=>{
          return item.id.includes(data.id)
         })
          validID.length === 0 ? setinvalidID(true) : setinvalidID(false)
 },[])
   let cartNumber=0
   let memory = new Set
   const handleButton=(id)=>{
   let cartCount=document.querySelectorAll('.cartCount')[0]
       let a=memory.has(id)
       if(a=== false){
           memory.add(id)
           console.log(memory)
       }
       let cartId=[]
       let memory2=new Set
       console.log(list)
       list?.forEach(item=>{
         memory2.add(item)
         console.log(memory2)

       })
       memory.forEach(item=>{
         memory2.add(item)
       })
       memory2.forEach(item=>{
         cartId.push(item)
       })
       console.log(cartId)
       cartCount.innerHTML=cartId?.length
     localStorage.setItem('cartId',JSON.stringify(cartId))
}
  return (
    <div className='Product'>
         {
          invalidID ?
          <div className='invalidId'><h1>Invalid Product Id</h1></div>
          :
          <div>
              <header>
              <Link to="/"><h1>Unique Cosmetics</h1></Link>
              
              <div>
                  <Link to="/cart">
                    <div class="cartContainer">
                      <div class="cart"><img src="/image/shopping-cart (1).png" alt="" /></div>
                      <p class="cartCount">{cartNumber}</p>
                    </div>
                  </Link>
              </div>
            </header>
            <main>
              <div className="proudctInformation">
                {
                  productInformation.map(item=>{
                    return <div key={item.id}>
                      <div className="img"><img src={item.productimage1} alt="" /></div>
                      <h1>{item.productname}</h1>
                      <h5>{item.productprice}</h5>
                    </div>
                  })
                }
              </div>
            <div class="btnContainer"><button onClick={()=>handleButton( data.id)} >Add to cart</button></div>
            <Link to="/checkout"><div class="btnContainer"><button>Checkout</button></div></Link>
            </main>
          </div>
         }
    <div className="Perfume">
    <footer>
        <h1>Frequently asked questions</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <h5>Where do you ship to ?</h5>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We only ship within Nigeria at the moment.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <h5>How long does shipping take</h5>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">A product will be shipped within two to three days after order date,our delivery crew work both on week days and weekends.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <h5>Which payment method do you accept ?</h5>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We only accept pament through atm cards, we do not accept pay on delivery method.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <h5>Damaged Goods</h5>
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">If a product arrives broken or damaged your money will be refunded instantly.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <h5>Returns / Refunds</h5>
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We only offer refunds when a good arrive damaged or it's not what you orderd,other than that we do not offer refund or allow return of products</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                  <h5>Wholesale</h5>
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We are ready to work with you,for more information contact uniquefragrance@email.com .</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  <h5>Customer Care</h5>
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"> contact us at uniquefragrance@email.com or call 09088776654.</div>
              </div>
            </div>
          </div>
          <div class="copywright">
            <h6>all rights reserved &copy; uniquefragrance</h6>
            <div class="sm">
                <div><img src="/image/instagram (3).png" alt="" /></div>
                <div><img src="/image/twitter (2).png" alt="" /></div>
                <div><img src="/image/facebook-circular-logo.png" alt="" /></div>
                <div><img src="/image/youtube (2).png" alt="" /></div>
            </div>
          </div>
    </footer>
    </div>
    </div>
  )
}

export default Product

