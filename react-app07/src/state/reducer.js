
import {  MARK_TXN_EDIT, UNMARK_TXN_EDIT,WAIT,ERROR,REFRESH } from './actions';

const initialState = () => ({
    txns: null,
    totalCredit: 0,
    totalDebit: 0,
    balance: 0,
    shallWait:false,
    errMsg:null
});

const cumulativeAmount = (txns, type) => {
    let cumAmt = 0;
    if (txns && txns.length > 0) {
        let filterdTxns = txns.filter(t => t.type === type);
        if (filterdTxns && filterdTxns.length > 0) {
            cumAmt = filterdTxns.map(t => t.amount).reduce((a1, a2) => a1 + a2);
        }
    }
    return cumAmt;
}

const txnsReducer = (state = initialState(), action) => {
    let modifiedState = null;

    switch (action.type) {
        case WAIT:
            modifiedState = { ...state,shallWait:true};
            break;

        case ERROR:
            modifiedState = { ...state,shallWait:false,errMsg:action.errMsg};
            break;

        case REFRESH:
            let txns = action.txns;
            let totalCredit = cumulativeAmount(txns, 'EARNING');
            let totalDebit = cumulativeAmount(txns, 'EXPENSE');
            let balance = totalCredit - totalDebit;
            modifiedState = { txns, totalDebit, totalCredit, balance,shallWait:false,errMsg:null };
            break;

        case MARK_TXN_EDIT:
            txns = state.txns.map(t => t.id === action.id ? { ...t, isEditing: true } : t);
            modifiedState = { ...state, txns };
            break;
            
        case UNMARK_TXN_EDIT:
            txns = state.txns.map(t => t.id === action.id ? { ...t, isEditing: undefined } : t);
            modifiedState = { ...state, txns };
            break;
        default:
            modifiedState={...state};
            break;
    }

    return modifiedState;
};

export default txnsReducer;