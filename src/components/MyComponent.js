import React, { useState } from 'react';
import NumberRange from './NumberRange';
import Main from './Main';
import EnterWish from './EnterWish';
import NumberCount from './NumberCount';
import Completion from './Completion';
import AddColumns from './AddColumns';

function MyComponent({ currentPage, setCurrentPage }) {
  console.log(currentPage);
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('');
  switch (currentPage) {
    case 'A':
      // return <Intro setCurrentPage={setCurrentPage}/>;
      return <Main setCurrentPage={setCurrentPage}/>
    case 'B':
      return <NumberRange setCurrentPage={setCurrentPage} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue}/>
    case 'C':
      return <NumberCount setCurrentPage={setCurrentPage} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue}/>
    case 'D':
      return <AddColumns setCurrentPage={setCurrentPage}/>
    case 'F':
      return <EnterWish setCurrentPage={setCurrentPage}/>
    case 'G':
      return <Completion setCurrentPage={setCurrentPage}/>
    default:
      return <Main />;
  }



};

export default MyComponent;