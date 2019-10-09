import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';

const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, payload: { value } });
const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, payload: { value } });
const createDivideAction = value => ({ type: DIVIDE_ACTION, payload: { value } });

// pure function
// 1. the only data the function can use is passed in via parameters
// 2. parameters cannot be mutated
// 3. no side effects (for example no ajax calls)
// 4. the only output is the return value
const calcReducer = (state = { result: 0, history: [] }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.value,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.value,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * action.payload.value,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result / action.payload.value,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    default:
      return state;
  }

};

const calcStore = createStore(calcReducer);

const add = value => calcStore.dispatch(createAddAction(value));
const subtract = value => calcStore.dispatch(createSubtractAction(value));
const multiply = value => calcStore.dispatch(createMultiplyAction(value));
const divide = value => calcStore.dispatch(createDivideAction(value));

calcStore.subscribe(() => {

  ReactDOM.render(<CalcTool
    result={calcStore.getState().result}
    history={calcStore.getState().history}
    onAdd={add} onSubtract={subtract} onMultiply={multiply} onDivide={divide}
  />, document.querySelector('#root'));

});

const CalcTool = ({ result, history, onAdd, onSubtract, onMultiply, onDivide }) => {

  const [ numInput, setNumInput ] = useState(0);

  return <form>

    <div>Result: {result}</div>
    <div>
      Num: <input type="number" value={numInput}
        onChange={e => setNumInput(Number(e.target.value))} />
    </div>
    <fieldset>
      <button type="button" onClick={() => onAdd(numInput)}>+</button>
      <button type="button" onClick={() => onSubtract(numInput)}>-</button>
      <button type="button" onClick={() => onMultiply(numInput)}>*</button>
      <button type="button" onClick={() => onDivide(numInput)}>/</button>
    </fieldset>
    <ul>
      {history.map( (historyEntry, index) =>
        <li key={index}>{historyEntry.opName} {historyEntry.opValue}</li>)}
    </ul>

  </form>;
}


add(0);

