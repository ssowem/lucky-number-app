import React from 'react';

//props가 G일때
const Completion = (props) => {
  return (
    <div>
      <p>나의 소원</p>
      <input type="text" value="다 이뤄져라"/>
      <div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <button onClick={() => props.setCurrentPage('A')}>첫화면으로</button>
    </div>
  );
}

export default Completion;