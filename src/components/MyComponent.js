import React, { useState } from 'react';
import NumberRange from './NumberRange';
import Main from './Main';
import EnterWish from './EnterWish';
import NumberCount from './NumberCount';
import Completion from './Completion';
import AddColumns from './AddColumns';

function MyComponent({ currentPage, setCurrentPage }) {
  // console.log(currentPage);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(99);

  const [CountMaxValue, setCountMaxValue] = useState(1);
  const [AddColumnsMaxValue, setAddColumnsMaxValue] = useState(1);

  const [inputValue, setInputValue] = useState("");
  
  const resetAllValues = () => {
    setMinValue(1);
    setMaxValue(99);
    setCountMaxValue(1);
    setAddColumnsMaxValue(1);
    setInputValue('');
    setCurrentPage('A');
  };

  

  switch (currentPage) {
    case 'A':
      return <Main setCurrentPage={setCurrentPage}/>
    case 'B':
      return <NumberRange
              setCurrentPage={setCurrentPage}
              minValue={minValue}
              setMinValue={setMinValue}
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              />
    case 'C':
      return <NumberCount
              setCurrentPage={setCurrentPage}
              minValue={minValue}
              setMinValue={setMinValue}
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              CountMaxValue={CountMaxValue}
              setCountMaxValue={setCountMaxValue}
              />
    case 'D':
      return <AddColumns
              setCurrentPage={setCurrentPage}
              minValue={minValue}
              setMinValue={setMinValue}
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              CountMaxValue={CountMaxValue}
              setCountMaxValue={setCountMaxValue}
              AddColumnsMaxValue={AddColumnsMaxValue}
              setAddColumnsMaxValue={setAddColumnsMaxValue}
              />
    case 'F':
      return <EnterWish
              setCurrentPage={setCurrentPage}
              inputValue={inputValue}
              setInputValue={setInputValue}

            />
    case 'G':
      return <Completion
              setCurrentPage={setCurrentPage}
              minValue={minValue}
              maxValue={maxValue}
              CountMaxValue={CountMaxValue}
              AddColumnsMaxValue={AddColumnsMaxValue}
              inputValue={inputValue}
              setInputValue={setInputValue}
              resetAllValues={resetAllValues}
            />
    default:
      return <Main />;
  }



};

export default MyComponent;