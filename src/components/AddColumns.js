import React from 'react';
import "./Contents.css"

// props가 D 일때
const AddColumns = (props) => {
  const { minValue, maxValue, CountMaxValue , AddColumnsMaxValue, setAddColumnsMaxValue} = props;

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
    <div>
      <p>몇개의 행운의 숫자를 얻고싶으세요?</p>
      <p className="hidden">1부터 99까지의 숫자만 가능합니다</p>
      <div>
        <input type="number" value={CountMaxValue} readOnly/>
      </div>

      <button onClick={() => props.setCurrentPage('C')}>이대로 줄 추가 취소</button>
      <div>
        <input type="number"
          value={AddColumnsMaxValue}
          onChange={handleMaxValueChange}
          />

        <div>
          <button onClick={handleIncrement}>더하기</button>
          <button onClick={handleDecrement}>빼기</button>
        </div>
      </div>

      <div>
        { AddColumnsMaxValue &&
        <p>
          {`${minValue}부터 ${maxValue}까지 범위에서` }<br />
          {`${CountMaxValue}개의 숫자가 ${AddColumnsMaxValue}줄로 조합이 됩니다.`}
        </p>
        }
        <button onClick={() => props.setCurrentPage('C')}>이전으로</button>
        <button onClick={() => props.setCurrentPage('F')}>다음으로</button>
      </div>
    </div>
  );
}

export default AddColumns;