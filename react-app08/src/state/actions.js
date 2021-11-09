import axios from 'axios';

//regular actions

export const WAIT='wait';
export const ERROR='error';
export const REFRESH='refresh';
export const MARK_TXN_EDIT='mark for edit';
export const UNMARK_TXN_EDIT='unmark for edit';

export const createWaitAction = () => ({type:WAIT});
export const createErrorAction = errMsg => ({type:ERROR,errMsg});
export const createRefreshAction = txns => ({type:REFRESH,txns});
export const createMarkTxnEditAction = id => ({type:MARK_TXN_EDIT,id});
export const createUnMarkTxnEditAction = id => ({type:UNMARK_TXN_EDIT,id});

//thunk actions

const apiUrl = "http://localhost:9000/txns";

export const createLoadDataAction = () => dispatch => {
    dispatch(createWaitAction());
    axios.get(apiUrl).then(
        resp => dispatch(createRefreshAction(resp.data)),
        err => {console.log(err); dispatch(createErrorAction("Unable to fetech data"))}
    );
};

export const createAddTxnAction = txn => dispatch => {
    dispatch(createWaitAction());
    axios.post(apiUrl,txn).then(
        resp => createLoadDataAction()(dispatch),
        err => {console.log(err); dispatch(createErrorAction("Unable to add record"))}
    );
};

export const createModTxnAction = txn => dispatch => {
    dispatch(createWaitAction());
    axios.put(`${apiUrl}/${txn.id}`,txn).then(
        resp => createLoadDataAction()(dispatch),
        err => {console.log(err); dispatch(createErrorAction("Unable to update record"))}
    );
};

export const createDelTxnAction = id => dispatch => {
    dispatch(createWaitAction());
    axios.delete(`${apiUrl}/${id}`).then(
        resp => createLoadDataAction()(dispatch),
        err => {console.log(err); dispatch(createErrorAction("Unable to delete record"))}
    );
};