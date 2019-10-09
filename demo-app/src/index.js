import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';
const CLEAR_ACTION = 'CLEAR';
const DELETE_HISTORY_ITEM = 'DELETE_HISTORY_ITEM';

const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, payload: { value } });
const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, payload: { value } });
const createDivideAction = value => ({ type: DIVIDE_ACTION, payload: { value } });
const createClearAction = () => ({ type: CLEAR_ACTION });
const createDeleteHistoryItemAction = historyItemIndex => ({ type: DELETE_HISTORY_ITEM, payload: { historyItemIndex } });

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
        history: state.history.concat({
          opName: action.type,
          opValue: action.payload.value,
        }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case CLEAR_ACTION:
      return {
        ...state,
        history: [],
      };
    case DELETE_HISTORY_ITEM:
      return {
        ...state,
        history: state.history.filter( (_, index) => index !== action.payload.historyItemIndex ),
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
const clear = () => calcStore.dispatch(createClearAction());
const deleteHistoryItem = historyItemIndex => calcStore.dispatch(createDeleteHistoryItemAction(historyItemIndex));

const calcResult = history => {

  if (!Array.isArray(history) || history.length === 0) {
    return 0;
  }

  return history.reduce( (total, historyItem) => { 

    switch(historyItem.opName) {
      case 'ADD':
        return total + historyItem.opValue;
      case 'SUBTRACT':
        return total - historyItem.opValue;
      case 'MULTIPLY':
        return total * historyItem.opValue;
      case 'DIVIDE':
        return total / historyItem.opValue;
      default:
        return total;
    }

  }, 0);
};

calcStore.subscribe(() => {

  ReactDOM.render(<CalcTool
    result={calcResult(calcStore.getState().history)}
    history={calcStore.getState().history} onClear={clear} onDeleteHistoryItem={deleteHistoryItem}
    onAdd={add} onSubtract={subtract} onMultiply={multiply} onDivide={divide}
  />, document.querySelector('#root'));

});

const CalcTool = ({ result, history, onClear, onDeleteHistoryItem, onAdd, onSubtract, onMultiply, onDivide }) => {

  const [ numInput, setNumInput ] = useState(0);

  const clear = () => {
    setNumInput(0);
    onClear();
  }

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
      <button type="button" onClick={clear}>Clear</button>
    </fieldset>
    <ul>
      {history.map( (historyEntry, index) =>
        <li key={index}>
        {historyEntry.opName} {historyEntry.opValue}
        <button type="button" onClick={() => onDeleteHistoryItem(index)}>X</button>
      </li>)}
    </ul>

  </form>;
}


add(0);

