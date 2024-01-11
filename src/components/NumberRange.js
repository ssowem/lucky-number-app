import React, { useState } from 'react';
import "./Contents.css"

// props가 B 일때
const NumberRange = (props) => {
  const {  minValue, setMinValue, maxValue, setMaxValue } = props;
  console.log(minValue);
  const handleMinValueChange = (e) => {
  const newMinValue = Math.max(1, Math.min(99, Number(e.target.value)));
  setMinValue(newMinValue);

  // 첫 번째 값이 두 번째 값보다 크거나 같으면,두 번째 값을 첫 번째 값보다 크게 조정
  if (maxValue <= newMinValue) {
    setMaxValue(newMinValue + 1);
  }
  };
    const handleMaxValueChange = (e) => {
    setMaxValue(Math.max(minValue + 1, Math.min(99,Number(e.target.value))));
  };

  return (
    <div>
      <p>조합하고 싶은 범위를 정해주세요.</p>
      <p>최대 99까지의 숫자만 가능합니다</p>

      <div>
      <div className="number-range-input">
        <input 
          type="number" 
          value={minValue} 
          onChange={handleMinValueChange} 
        />
        <span>~</span>
        <input 
          type="number" 
          value={maxValue} 
          min={minValue + 1}
          onChange={handleMaxValueChange} 
        />
      </div>
      {maxValue && <p>{`${minValue}부터 ${maxValue}까지의 숫자를 정하셨습니다.`}</p>}
    </div>

      <button className='start-btn' onClick={() => props.setCurrentPage('C')}>
        다음으로
      </button>
    </div>
    
  );
}

export default NumberRange;


