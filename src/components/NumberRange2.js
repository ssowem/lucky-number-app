import React, { useState } from 'react';
import "./Contents.css"

// props가 B 일때
const NumberRange = (props) => {

  const { minValue, setMinValue, maxValue, setMaxValue } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  const invalidMaxValue = 99;
  const invalidMinValue = 1;

  console.log("min : " + minValue + ", max : " + maxValue);

  //왼쪽 값을 바꿨을 때 동작
  //step1 : 최소값 부터 입력받는다.
  //step1.4 : 야 그러면.... 0은 입력이 된거야 안된거야?
  //step1.5 : 만약에 최대값이 아직 안들어왔으면 ? -> 기획을 엎고 최소값부터 무조껀 받게 한다!
  //step2 : 만약에 입력받은 최소값이 최대값보다 큰 값이 들어온다면????? -> (기획의도) 응 안돼~
  const handleMinValueChange = (e) => {

    //만약에 최대값이 있는 상태야? 
    if(maxValue !== '' && maxValue <= e.target.value){
      alert('최대값보다 클수는 없음~')
      setMinValue(minValue);
      return;
    }

    //step0 : 값이 공백이면 인정!
    if(e.target.value === ''){
      setMinValue(e.target.value);
      return;
    }

    //step1 : 키보드 입력값을 받는다.

    //step2 : 최소값이 1보다 작으면 아웃!
    if (invalidMinValue > e.target.value) {
      alert("안됌~");
      e.target.value = invalidMinValue;
    }

    //step3 : 최대값이 (max - min)98보다 크면 아웃!
    if ((invalidMaxValue - invalidMinValue) < e.target.value) {
      alert("안됌~");
      e.target.value = invalidMinValue;
    }

    //step4 : 입력값을 set 해준다.
    setMinValue(e.target.value);

    //step4 : 입력이 완료되면 최대값 입력을 받을 수 있도록 허가!
    setIsDisabled(false);

  };

  //step1 : 최대값을 입력 받는다.
  //step2 : 만약에 입력받은 최대값이 최소값보다 작으면?????? 응 안돼~ 
  const handleMaxValueChange = (e) => {

    

    //만약에 최소값이 최대값보다 크면 ??????????????
    if(maxValue !== '' && e.target.value <= minValue){
      alert('최소값보다 작을수는 없음~')
      return;
    }

    if (invalidMaxValue < e.target.value) {
      alert("으 꺼져~");
      e.target.value = maxValue;
    }

    setMaxValue(e.target.value);
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
            disabled={isDisabled}
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


