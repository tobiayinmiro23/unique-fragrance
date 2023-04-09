import React from 'react'
import { Link} from 'react-router-dom';
import { useEffect,useState} from 'react'
import  product  from "./data.js"
import './cart.css'
const Cart = ({page,getTotal}) => {
    const [data, setdata] = useState([])
    const [total, setotal] = useState(0)
    let list= JSON.parse(localStorage.getItem('cartId'))
    let result=[];
  
      const getData=()=>{
          let memory=[]
          list?.forEach(item =>{
            let data=product.filter(res =>{
              return res.id === item
              })
              if(data.length !== 0){
                memory.push(data)
                result=memory.map(item=>{
                  return item[0]
                })
                 setdata(result)
              }
              console.log(data)
          })
      }
  
      useEffect(()=>{
        getData()
      },[])

        let productPrice=[]
        var sum
        useEffect(()=>{
                data.map(item=>{
                    productPrice.push(item.productprice * item.quantity)
                })
                sum=productPrice.reduce((item,acc)=>{
                    return item + acc
                },0)
                setotal(sum)
                getTotal(sum)
            },[data])
      const handleDelete=(id)=>{
          let result=data.filter(item=>{
            return item.id !== id
           })
          setdata(result)
          let memory=[]
          result.map(item=>{
            return memory.push(item.id)
           })
           localStorage.setItem('cartId',JSON.stringify(memory))
      }

            const handleAdd=(item)=>{
            item.quantity +=1
            getData()
            }

            const Subtract=(item)=>{
                if(item.quantity===1){
                  item.quantity=1
                }else{
                  item.quantity -=1
                    getData()
                }
              } 
  return (
    <div className='Cart'>
        <main>
        <div class="container">
            <div class="cartContainer">
                {
                    data.map(item=>{
                        return <div class="cartProduct" key={item?.id}>
                                        <div>
                                            <div class="img"><img src={item?.productimage1} alt="unavailable"/></div>
                                            <button class="delete" onClick={()=>handleDelete(item.id)}>Remove</button>
                                        </div>
                                        <div class="info">
                                            <h3 class="name">{item?.productname}</h3>
                                            <div class="price">
                                                <p>&#8358;</p>
                                                <p>{item?.productprice.toLocaleString()}</p>
                                                </div>
                                            <div class="controlbtn">
                                                <button class="add" onClick={()=>handleAdd(item)}>add</button>
                                                <h3 class="qty">{item?.quantity}</h3>
                                                <button className={item?.quantity ===1 ? 'disable'  : 'sub'}  onClick={()=>Subtract(item)}>sub</button>
                                            </div>
                                        </div>
                                </div>
                        })
                }
            </div>
            {
                data.length === 0 ?
                <h1>your cart is currently empty</h1>
                :
                <div class="totalContainer">
                <h2>Cart Summary</h2>
                <hr/>
                <div>
                    <h3>Total item : </h3>
                    <h3 className='totalItem'>{data.length}</h3>
                </div>
                <div>
                     <h3>Total : </h3>
                    <div className='totalPrice'>
                        <h3>&#8358;</h3>
                        <h3 className='total'>{total.toLocaleString()}</h3>
                     </div>
                </div>
                <Link to="/checkout"><div class="btnContainer"><button>Checkout</button></div></Link>
                
            </div>
            }
        </div>
    </main>
    </div>
  )
}

export default Cart