import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmmount} = useContext(ShopContext);


  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'Cart'} text2={'Totals'}/>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{currency} {delivery_fee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmmount()===0 ? 0: getCartAmmount()+delivery_fee}</b>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotal
