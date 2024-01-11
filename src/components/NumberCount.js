import React from 'react';
import "./Contents.css"

// props가 C 일때
const NumberCount = (props) => {
  const {  minValue, setMinValue, maxValue, setMaxValue } = props;
  const totalCount = maxValue - minValue + 1;
  console.log("범위를 더한 값",totalCount);

  return (

    <div>
      <p>몇개의 행운의 숫자를 얻고싶으세요?</p>
      <p>숫자 갯수, 줄 추가는 최대 7개까지만 가능합니다.</p>

      <div>
        <input type="number" />
      </div>
      <p className="hidden">n개의 숫자조합이 이루어집니다.</p>
      <div>
        <button>더하기</button>
        <button>빼기</button>
      </div>
      <button onClick={() => props.setCurrentPage('D')}>이대로 줄 추가</button>

      <div>
        <button onClick={() => props.setCurrentPage('B')}>이전으로</button>
        <button onClick={() => props.setCurrentPage('F')}>다음으로</button>
      </div>
    </div>
  );
}

export default NumberCount;