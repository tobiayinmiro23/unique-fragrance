import React from 'react'

const Payment = ({paymentLink}) => {
  return (
    <div className='Payment'>
              <form action={paymentLink}>
                <button><a>Click to pay</a></button>
              </form>
    </div>
  )
}

export default Payment