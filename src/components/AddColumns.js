import React from 'react';
import "./Contents.css"

// props가 D 일때
const AddColumns = (props) => {
  return (
    <div>
      <p>몇개의 행운의 숫자를 얻고싶으세요?</p>
      <p className="hidden">1부터 99까지의 숫자만 가능합니다</p>
      <div>
        <input type="number" />
      </div>

      <button onClick={() => props.setCurrentPage('C')}>이대로 줄 추가 취소</button>
      <div>
        <input type="number" />
      </div>

      <div>
        <button onClick={() => props.setCurrentPage('C')}>이전으로</button>
        <button onClick={() => props.setCurrentPage('F')}>다음으로</button>
      </div>
    </div>
  );
}

export default AddColumns;