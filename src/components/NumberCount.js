import React from 'react';
import "./Contents.css"

// props가 C 일때
const NumberCount = (props) => {
  const { minValue, maxValue, CountMaxValue, setCountMaxValue } = props;
  const totalCount = maxValue - minValue + 1;

  const handleMaxValueChange = (e) => {
    const newValue = Math.max(1, Math.min(7, Number(e.target.value)));
    setCountMaxValue(newValue);
  }

  const handleIncrement = () => {
    setCountMaxValue(prevsetCountMaxValue => Math.min(7, prevsetCountMaxValue + 1));
  }

  const handleDecrement = () => {
    setCountMaxValue(prevsetCountMaxValue => Math.max(1, prevsetCountMaxValue - 1));
  }

  const handleNextClick = () => {
    if (CountMaxValue > totalCount) {
      alert("선택범위를 벗어난 숫자를 입력하셨습니다")
      return;
    }
    props.setCurrentPage('F');
  }

  const handleAddColumnsClick = () => {
    if (CountMaxValue > totalCount) {
      alert("선택범위를 벗어난 숫자를 입력하셨습니다")
      return;
    }
    props.setCurrentPage('D');
  }
  return (

    <div>
      <p className='text-medium'>몇개의 행운의 숫자를 얻고싶으세요?</p>
      <p className='text-small'>숫자 갯수, 줄 추가는 최대 7개까지만 가능합니다.</p>

      <div className='inner'>
        <input type="number"
          value={CountMaxValue}
          onChange={handleMaxValueChange}
        />

        {CountMaxValue && <p className='user-message'>{`${CountMaxValue}개의 랜덤 숫자를 얻게 됩니다..`}</p>}

        <div>
          <button onClick={handleIncrement}>더하기</button>
          <button onClick={handleDecrement}>빼기</button>
        </div>
      </div>



      <button onClick={handleAddColumnsClick}>이대로 줄 추가</button>

      <div>
        <button onClick={() => props.setCurrentPage('B')}>이전으로</button>
        <button onClick={handleNextClick}>다음으로</button>
      </div>
    </div>
  );
}

export default NumberCount;