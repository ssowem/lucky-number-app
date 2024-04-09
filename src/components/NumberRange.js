import React from 'react';

// props가 B 일때
const NumberRange = (props) => {

  const { minValue, setMinValue, maxValue, setMaxValue } = props;

  const handleValueChange = type => event => {
    // console.log("min이나max 중에",type);
    // console.log("입력된값",event.target.value);

    if ("min" === type) {
      if (event.target.value === "") {
        setMinValue(event.target.value);
      } else {
        setMinValue(parseInt(event.target.value));
      }
    } else {
      if (event.target.value === "") {
        setMaxValue(event.target.value);
      } else {
        setMaxValue(parseInt(event.target.value));
      }
    }
  }

  const handleNextClick = () => {
    if (minValue === "") {
      alert("최소값을 입력해주세요.")
      return;
    }
    if (maxValue === "") {
      alert("최대값을 입력해주세요.")
      return;
    }
    if (maxValue <= minValue) {
      alert("최대값은 최소값보다 작거나 같을 수 없습니다.")
      return;
    }
    if (maxValue > 99) {
      alert("99보다 큰 값을 입력할 수 없습니다.")
      return;
    }
    props.setCurrentPage('C');
  }

  return (
    <div className='contents-gap'>
      <div>
        <p className='text-medium'>조합하고 싶은 범위를 정해주세요.</p>
        <p className='text-small'>💡최대 99까지의 숫자만 가능합니다.</p>
      </div>

      <div className='input-gap'>
        <div className="number-range-input">
          <input
            type="number"
            value={minValue}
            min="1"
            max="99"
            onChange={handleValueChange("min")}

          />
          <span>~</span>
          <input
            type="number"
            value={maxValue}
            min="1"
            max="99"
            onChange={handleValueChange("max")}
          />
        </div>
        {maxValue && <p className='user-message'>{`${minValue}부터 ${maxValue}까지의 숫자를 정하셨습니다.`}</p>}
      </div>

      <button className='next' onClick={handleNextClick}>
        다음으로
      </button>
    </div>

  );
}

export default NumberRange;


