const ADD_TRANSACTION = "ADD_TRANSACTION";
const CHANGE_AMOUNT = "CHANGE_AMOUNT";
const CHANGE_CHECK_NUMBER = "CHANGE_CHECK_NUMBER";

export function addTransaction(value) {
  return { type: ADD_TRANSACTION, payload: value };
}

export function changeAmount(value) {
  return {
    type: CHANGE_AMOUNT,
    payload: value,
  };
}

export function changeCheckNumber(value) {
  return {
    type: CHANGE_CHECK_NUMBER,
    payload: value,
  };
}
const initialState = {
  transactionList: [],
  amount: 0,
  checkNumber: 0,
};

export function transactioListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactionList: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
      case CHANGE_CHECK_NUMBER:
        return {
          ...state,
          checkNumber: action.payload
        }
    default:
      return state;
  }
}
