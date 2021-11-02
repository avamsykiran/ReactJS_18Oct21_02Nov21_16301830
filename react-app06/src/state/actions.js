
export const ADD_TXN='add txn';
export const MOD_TXN='modify txn';
export const DEL_TXN='delete txn';
export const MARK_TXN_EDIT='mark for edit';
export const UNMARK_TXN_EDIT='unmark for edit';

export const createAddTxnAction = txn => ({type:ADD_TXN,txn});
export const createModTxnAction = txn => ({type:MOD_TXN,txn});
export const createDelTxnAction = id => ({type:DEL_TXN,id});
export const createMarkTxnEditAction = id => ({type:MARK_TXN_EDIT,id});
export const createUnMarkTxnEditAction = id => ({type:UNMARK_TXN_EDIT,id});