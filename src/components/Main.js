import React from 'react';
import './css/Main.css'
import coin from './images/coin.png'
// props가 A 일때
const Main = (props) => {
  return (
    <div>
      <h1>가제: 로또연</h1>
      <div className='intro-text'>
        안녕하세요!<br />
        나의 소원을 빌고, 행운의 숫자를 조합하는 로또연 입니다.<br />
        행운을 빌어보아요 :)
      </div>
      <button className='start-btn' onClick={() => props.setCurrentPage('B')}>
            행운을 찾으러 GO
      </button>
      <img src={coin} className='coin-image' alt='coin'/>
    </div>
  )
}

export default Main;