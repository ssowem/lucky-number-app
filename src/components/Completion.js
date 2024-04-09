import React, { useState, useEffect } from 'react';

//props가 G일때
const Completion = (props) => {
  const { minValue, maxValue, CountMaxValue, inputValue, resetAllValues, AddColumnsMaxValue } = props;
  const [randomNumbers, setRandomNumbers] = useState([]);
  const generateRandomNumbers = (min, max, count) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  };

  const renderLists = () => {
    return Array.from({ length: AddColumnsMaxValue }).map((_, ulIndex) => (
      <ul key={ulIndex}>
        {generateRandomNumbers(minValue, maxValue, CountMaxValue).map((number, liIndex) => (
          <li key={liIndex}>{number}</li>
        ))}
      </ul>
    ))
  }
  useEffect(() => {
    const numbers = generateRandomNumbers(minValue, maxValue, CountMaxValue);
    setRandomNumbers(numbers);
  }, [minValue, maxValue, CountMaxValue]);

  const handleReset = () => {
    props.setCurrentPage('A');
    resetAllValues();
  };

  return (
    <div className='contents-gap'>
      <p className='text-medium'>🙏🏻나의 소원</p>
      <input className='wish' type="text" value={inputValue} readOnly />
      <div className='list-container'>{renderLists()}</div>
        <button onClick={handleReset}>첫 화면으로</button>
    </div>
  );
}

export default Completion;