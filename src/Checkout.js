import React,{useState,useRef} from 'react'
import { Link} from 'react-router-dom';

import './Checkout.css'
const Checkout = ({getPaymentLink,page}) => {
  let r=useRef()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [address, setaddress] = useState('')
  const [errormsg, seterrormsg] = useState('')

  const handleInput=()=>{
   let textarea=document.querySelectorAll('.Checkout .contact form textarea')[0]
  let inputs=document.querySelectorAll('.Checkout .contact form input')
  if(textarea.value.trim() === ''){
    textarea.focus()
  }
  inputs.forEach(item=>{
      if(item.value.trim() === ''){
        item.focus()
      }
    })
 }
  const handleButton=(e)=>{
    if(name.trim().length >= 1 && email.trim().length >= 1 && number.trim().length >= 1 && address.trim().length >= 1){
        fetch('http://localhost:3001/pay',{
                method:'post',
                headers:{
                  "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email
                })
              }).then(res=>res.json())
              .then(res=>{
                if(res.status=== false){
                  seterrormsg(res.message)
                  console.log(res.message)
                }else{
                  getPaymentLink(res.data.authorization_url)
                }
              })
              .catch(err=>console.log(err))
             
    }else{
    e.preventDefault()
    handleInput()
    }
  }
  return (
    <div className='Checkout'>
      <div></div>
         <section class="contact">
            <form action='' >
                <input type="text" className='inp'  required placeholder="name" value={name}  onInput={(e)=>setname(e.target.value)} name="" id=""/>
                <input type="email" required placeholder="email" value={email} onInput={(e)=>setemail(e.target.value)}  name="" id=""/>
                <input type="number" required placeholder="number" value={number} ref={r} onInput={(e)=>setnumber(e.target.value)}  name="" id=""/>
                <div className="error">{errormsg}</div>
                <textarea required placeholder="address" value={address} onInput={(e)=>setaddress(e.target.value)} ></textarea>
                <Link to='/payment'><div class="btnContainer"><button onClick={(e)=>handleButton(e)}>Proceed to payment</button></div></Link>
            </form>
    </section>
    </div>
  )
}

export default Checkout