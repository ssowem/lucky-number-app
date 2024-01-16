import React from 'react';

// props가 F 일때
const EnterWish = (props) => {
  const {inputValue,setInputValue} = props;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (event) => {
    // const isSpaceIncluded = event.target.value;
    if(inputValue.trim() === ''){
      alert("소원을 꼭 입력해주셔야 합니다!")
      return;
    }
    props.setCurrentPage('G')
  }
  return (
    <div>
      <p>마지막으로 소원을 입력해주세요!</p>
      <input type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
        
      <div>
        <button onClick={() => props.setCurrentPage('D')}>이전으로</button>
        <button onClick={handleSubmit}>완성하기</button>
      </div>
    </div>


  )
}

export default EnterWish;

