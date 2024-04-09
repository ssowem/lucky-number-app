import React from 'react';

// props가 D 일때
const AddColumns = (props) => {
  const { minValue, maxValue, CountMaxValue, AddColumnsMaxValue, setAddColumnsMaxValue } = props;

  const handleMaxValueChange = (e) => {
    const newValue = Math.max(1, Math.min(7, Number(e.target.value)));
    setAddColumnsMaxValue(newValue);
  }

  const handleIncrement = () => {
    setAddColumnsMaxValue(prevsetAddColumnsMaxValue => Math.min(7, prevsetAddColumnsMaxValue + 1));
  }

  const handleDecrement = () => {
    setAddColumnsMaxValue(prevsetAddColumnsMaxValue => Math.max(1, prevsetAddColumnsMaxValue - 1));
  }

  return (
    <div className='contents-gap'>

<p className='text-medium'>줄 추가를 선택하셨습니다.</p>
      <div className='input-gap'>
        <div>
          <input type="number"
            value={AddColumnsMaxValue}
            onChange={handleMaxValueChange}
          />
        </div>
        {AddColumnsMaxValue &&
          <p className='user-message'>
            {`${minValue}부터 ${maxValue}까지 범위에서`}<br />
            {`${CountMaxValue}개의 숫자가 ${AddColumnsMaxValue}줄로 랜덤 숫자조합이 됩니다.`}
          </p>
        }
      </div>


      <div className='btn-gap'>
        <button onClick={handleIncrement}>더하기</button>
        <button onClick={handleDecrement}>빼기</button>
      </div>


      <button className='cancel' onClick={() => props.setCurrentPage('C')}>이대로 줄 추가 취소</button>
      <div className='btn-gap control'>
        <button onClick={() => props.setCurrentPage('C')}>이전으로</button>
        <button className='next' onClick={() => props.setCurrentPage('F')}>다음으로</button>
      </div>
    </div>
  );
}

export default AddColumns;