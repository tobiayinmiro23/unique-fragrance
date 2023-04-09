import React,{useEffect} from 'react'
import { Link} from 'react-router-dom';

import './perfume.css'
import product from './data'
const Perfume = ({getProductId}) => {
  let list;
  useEffect(()=>{
     list= JSON.parse(localStorage.getItem('cartId'))
          let cartCount=document.querySelectorAll('.cartCount')[0]
          cartCount.innerHTML=list?.length || 0
  },[])
    const handleCard=(item)=>{
        getProductId(item)
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
        list?.forEach(item=>{
          memory2.add(item)
        })
        memory.forEach(item=>{
          memory2.add(item)
        })
        memory2.forEach(item=>{
          cartId.push(item)
        })
        cartCount.innerHTML=cartId?.length
      localStorage.setItem('cartId',JSON.stringify(cartId))

}
const handleMenu=()=>{  
  let menu=document.querySelectorAll('.Perfume main nav ul')[0]
  menu.classList.toggle('menuOpen')

}
let am=[]
  return (
   <div className='Perfume'>
    {memory.forEach(item=>{
       return item.productname
    })}
           <main class="info">
                <nav>
                {/* <div class="menu"><img src="/image/hamburger (2).png" alt="" /></div> */}
                <div class="menu" onClick={handleMenu}><img src="/image/icons8-menu-24.png" alt="" /></div>
                    <h1>Unique Cosmetics</h1>
                    <ul>
                      <Link to="/collections"><li>Collections</li></Link>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <Link to="/cart">
                        <div class="cartContainer">
                                {/* <div class="cart"><img src="/image/shopping-cart (2).png" alt="" /></div> */}
                                <div class="cart"><img src="/image/shopping-cart (1).png" alt="" /></div>
                                <p class="cartCount">{cartNumber}</p>
                        </div>
                    </Link>
                </nav>
                <aside>
                  {/* <img src="/image/pexels-suzy-hazelwood-3609620.jpg" alt="" /> */}
                </aside>
                <div class="intro">
                    <h1>Welcome to Unique Cosmetics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum possimus suscipit iste molestiae!</p>
                    <Link to="/collections"><button >View our collections</button></Link>
                    
                </div>
            </main>
    <section class="about">
        <h1 id='about'>About</h1>
        <h3>Unique Cosmetics is an online beauty product vendor based in Abuja that sells a wide array of product which include perfumes,body spray, hair growth creame, ance remover creame,ance remover soap,moisturiser and more </h3>
        <h2>Why us ?</h2>
        <div class="container">
            <div class="point">
                <div class="img"></div>
                <h3>Reliable</h3>
                <p>Customers can return the product and get a refund if the product was damaged,not what they requested or not what they saw on our online store</p>
            </div>
            <div class="point">
                <div class="img"></div>
                <h3>Fast</h3>
                <p>We deliver our products within two to three days of making payment our delivery team work during week days and week ends to ensure our customers satisfaction</p>
            </div>
            <div class="point">
                <div class="img"></div>
                <h3>Effective</h3>
                <p>All our products our very effective we place great importance on our customers experience to ensure that they get the desired results they're looking for</p>
            </div>
        </div>
    </section>
    <section class="collections">
        <h1>Collections</h1>
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
        <div className="blur"></div>
        <Link to="/collections"> <div className="moreBtn"><button className='more'>View more</button></div></Link>
    </section>
    <section class="contact">
        <h1 id='contact'>Contact Us</h1>
        <form action="">
            <div class="inputWrapper">
                <input type="text" required placeholder="name" name="" id=""/>
                <input type="text" required placeholder="email" name="" id=""/>
            </div>
            <textarea required placeholder="message" ></textarea>
            <div class="btnContainer"><button>Send</button></div>
        </form>
    </section>
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
  )
}

export default Perfume