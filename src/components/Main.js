import React from 'react';
import './css/Main.css'
import coin from './images/coin.png'
// props가 A 일때
const Main = (props) => {
  return (
    <div className='contents-gap'>
      <h1>LUCKY DRAW</h1>
      <div className='intro-text'>
        소원을 빌고, <br />
        행운의 숫자를 조합해보세요 :) 
      </div>
      <button className='start-btn' onClick={() => props.setCurrentPage('B')}>
            행운을 찾으러 GO
      </button>
      <img src={coin} className='coin-image' alt='coin'/>
    </div>
  )
}

export default Main;