import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireWorks } from '../lib/utils';

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt</p>
        <p className='description'>
          If you have any question, please email
          <a className='email' href='mailto:ahmad@example.com'>
            ahmad@example.com
          </a>
        </p>
        <Link href='/'>
          <button className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default success;
