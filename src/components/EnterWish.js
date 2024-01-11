import React from 'react';

// props가 F 일때
const EnterWish = (props) => {
  return (
    <div>
      <p>마지막으로 소원을 입력해주세요!</p>
      <input type="text" />

      <div>
        <button onClick={() => props.setCurrentPage('D')}>이전으로</button>
        <button onClick={() => props.setCurrentPage('G')}>완성하기</button>
      </div>
    </div>


  )
}

export default EnterWish;