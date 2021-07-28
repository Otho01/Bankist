const ADD_TRANSACTION = "ADD_TRANSACTION";

export function addTransaction(value) {
  return { type: ADD_TRANSACTION, payload: value };
}

const initialState = {
  transactionList: [],
};

export function transactioListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactionList: state.transactionList.push(),
      };
  }
}
