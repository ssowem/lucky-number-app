import React from 'react';

// props가 F 일때
const EnterWish = (props) => {
  const {inputValue,setInputValue} = props;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    if(inputValue.trim() === ''){
      alert("소원을 꼭 입력해주셔야 합니다!")
      return;
    } else
    props.setCurrentPage('G')
  }
  return (
    <div className='contents-gap'> 
      <p className='text-medium'>마지막으로 소원을 입력해주세요!</p>
      <input className='wish'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
        
      <div className='btn-gap control'>
        <button onClick={() => props.setCurrentPage('D')}>이전으로</button>
        <button className='next' onClick={handleSubmit}>완성하기</button>
      </div>
    </div>
  )
}

export default EnterWish;

