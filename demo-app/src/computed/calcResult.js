export const calcResult = history => {

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