import { useEffect, useState } from 'react';
import txnService from '../services/TxnService';
import TxnForm from './TxnForm';
import TxnRow from './TxnRow';
import TxnSummary from './TxnSummary';

const Statement = () => {

    let [txns, setTxns] = useState(null);

    let [err, setErr] = useState(null);

    const loadData = () => {
        txnService.getAll().then(
            resp => setTxns([...resp.data]),
            error => { console.log(error); setErr("Unable to fetech data, please try later"); }
        );
    }

    useEffect(loadData, []); //loading data on componentDidMount

    const addItem = item => {
        txnService.add(item).then(
            resp => loadData(),
            error => { console.log(error); setErr("Unable to add the record, please try later"); }
        );
    }

    const delItemById = id => {
        txnService.remove(id).then(
            resp => loadData(),
            error => { console.log(error); setErr("Unable to delete the record, please try later"); }
        );
    }

    const saveItem = item => {
        txnService.update({ ...item, isEditing: undefined }).then(
            resp => loadData(),
            error => { console.log(error); setErr("Unable to save the record, please try later"); }
        );
    }

    const markItemForEdit = id => {
        setTxns(txns.map(t => t.id === id ? { ...t, isEditing: true } : t));
    }

    const unmarkItemForEdit = id => {
        setTxns(txns.map(t => t.id === id ? { ...t, isEditing: undefined } : t));
    }

    return (
        <div className="container-fluid p-4">
            <h3>Account Statement</h3>

            {(!txns && !err) &&
                <div className="alert alert-info p-2">
                    <strong>Please wait while loading data...</strong>
                </div>
            }

            {err &&
                <div className="alert alert-danger p-2">
                    <strong>{err}</strong>
                </div>
            }

            {txns &&
                <div className="border border-info">
                    <div class="row">
                        <div className="col-2 fw-bolder">Date</div>
                        <div className="col-1 fw-bolder">TxnId</div>
                        <div className="col fw-bolder">Header</div>
                        <div className="col-1 fw-bolder">Credit</div>
                        <div className="col-1 fw-bolder">Debit</div>
                        <div className="col-3 fw-bolder">Action</div>
                    </div>
                    <TxnForm passTxnToParent={addItem} />
                    {txns.map(t => t.isEditing ?
                        <TxnForm passTxnToParent={saveItem} key={t.id} txnToEdit={t} cancelEdit={unmarkItemForEdit} /> :
                        <TxnRow txn={t} key={t.id} delItem={delItemById} editItem={markItemForEdit} />)}
                    <TxnSummary txns={txns} />
                </div>
            }
        </div>
    );
}

export default Statement;