import React, { useState } from 'react';

export const CalcTool = ({
  result, history, onClear, onDeleteHistoryItem,
  onAdd, onSubtract, onMultiply, onDivide,
}) => {

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