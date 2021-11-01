import { useState } from "react";

const TxnForm = ({ passTxnToParent, txnToEdit, cancelEdit }) => {

    let initalState = txnToEdit ? { ...txnToEdit } : {
        id: 0,
        header: '',
        amount: 0,
        dot: '',
        type: ''
    };

    let [txn, setTxn] = useState({ ...initalState });
    let [errs, setErrs] = useState([]);

    const handleFormSubmit = event => {
        event.preventDefault();

        let errs = [];

        if (!txn.id || txn.id <= 0) {
            errs.push("Transaction id can not zero or negative");
        }

        if (!txn.header || txn.header.trim().length == 0) {
            errs.push("Header can not be empty");
        }

        if (!txn.amount || txn.amount <= 0) {
            errs.push("Amount is a mandate field and can not be zero or negative");
        }

        if (!txn.dot || txn.dot.trim().length == 0) {
            errs.push("Date of Transaction is a mandate field");
        }

        if (!txn.type || txn.type.trim().length == 0) {
            errs.push("Type of Transaction is a mandate field");
        }

        if (errs.length > 0) {
            setErrs(errs);                // Updating errors
        } else {
            passTxnToParent({ ...txn});  // passing txn to parent to add
            setTxn({ ...initalState });
            setErrs([]);                  // reseting the form and errors
        }
    };

    const acceptVal = event => {
        let field = event.target.name;
        let value = event.target.type != 'number' ? event.target.value : parseInt(event.target.value);
        setTxn({ ...txn, [field]: value });
    }

    return (
        <form className="form-inline" onSubmit={handleFormSubmit}>

            {errs.length > 0 && (
                <div class="col-sm-6 mx-auto mt-1">
                    <div className="alert alert-danger p-1">
                        <h6>Please clear the below errors:</h6>
                        <ol>
                            {errs.map(err => <li>{err}</li>)}
                        </ol>
                    </div>
                </div>
            )}

            <div class="row">
                <div className="col-2">
                    <input type="date" className="form-control"
                        placeholder="Txn Date" value={txn.dot} name="dot" onChange={acceptVal} />
                </div>
                <div className="col-1">
                    <input type="number" className="form-control"
                        placeholder="Txn Id" value={txn.id} name="id" onChange={acceptVal} />
                </div>
                <div className="col">
                    <input type="input" className="form-control"
                        placeholder="Header" value={txn.header} name="header" onChange={acceptVal} />
                </div>
                <div className="col-1">
                    <input type="number" className="form-control"
                        placeholder="Amount" value={txn.amount} name="amount" onChange={acceptVal} />
                </div>
                <div className="col-1">
                    <select className="form-control" value={txn.type} name="type" onChange={acceptVal}>
                        <option value="">--SELECT--</option>
                        <option value="EARNING">EARNING</option>
                        <option value="EXPENSE">EXPENSE</option>
                    </select>
                </div>

                {txnToEdit ?
                    (
                        <div className="col-3">
                            <button className="btn btn-secondary btn-sm">SAVE</button>
                            <button className="btn btn-danger btn-sm" onClick={e => cancelEdit()}>Cancel</button>
                        </div>
                    ) : (
                        <div className="col-3">
                            <button className="btn btn-primary btn-sm">ADD</button>
                        </div>
                    )
                }

            </div>
        </form>
    );
}

export default TxnForm;