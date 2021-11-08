
import { ADD_TXN, DEL_TXN, MARK_TXN_EDIT, UNMARK_TXN_EDIT, MOD_TXN } from './actions';

const initialState = () => ({
    txns: [
        { id: 1, header: 'Salary', amount: 55000, dot: '2021-01-01', type: 'EARNING' },
        { id: 2, header: 'Rent', amount: 5000, dot: '2021-01-02', type: 'EXPENSE' },
        { id: 3, header: 'Mobile Bill', amount: 500, dot: '2021-01-02', type: 'EXPENSE' },
        { id: 4, header: 'Internet Bill', amount: 500, dot: '2021-01-03', type: 'EXPENSE' },
        { id: 5, header: 'Car EMI', amount: 5500, dot: '2021-01-05', type: 'EXPENSE' }
    ],
    totalCredit: 55000,
    totalDebit: 11500,
    balance: 43500
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

    let txns, totalCredit, totalDebit,balance;

    switch (action.type) {
        case ADD_TXN:
            txns = [...state.txns, action.txn];
            totalCredit = cumulativeAmount(txns, 'EARNING');
            totalDebit = cumulativeAmount(txns, 'EXPENSE');
            balance = totalCredit - totalDebit;
            modifiedState = { txns, totalDebit, totalCredit, balance };
            break;

        case MOD_TXN:
            txns = state.txns.map(t => t.id === action.txn.id ? { ...action.txn, isEditing: undefined } : t);
            totalCredit = cumulativeAmount(txns, 'EARNING');
            totalDebit = cumulativeAmount(txns, 'EXPENSE');
            balance = totalCredit - totalDebit;
            modifiedState = { txns, totalDebit, totalCredit, balance };
            break;

        case DEL_TXN:
            txns = state.txns.filter(t => t.id !== action.id);
            totalCredit = cumulativeAmount(txns, 'EARNING');
            totalDebit = cumulativeAmount(txns, 'EXPENSE');
            balance = totalCredit - totalDebit;
            modifiedState = { txns, totalDebit, totalCredit, balance };
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