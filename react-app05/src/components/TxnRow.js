const TxnRow = ({txn,delItem,editItem}) => (
    <div className="row">
        <div className="col-2">{txn.dot}</div>
        <div className="col-1">{txn.id}</div>
        <div className="col">{txn.header}</div>
        <div className="col-1 text-end">{txn.type === 'EARNING' ? txn.amount : undefined}</div>
        <div className="col-1 text-end">{txn.type === 'EXPENSE' ? txn.amount : undefined}</div>
        <div className="col-3">
            <button className="btn btn-secondary btn-sm mr-2" onClick={e => editItem(txn.id)}>EDIT</button>
            <button className="btn btn-danger btn-sm"
                onClick={e => {
                    if (window.confirm(`Are you sure of deleting txn#${txn.id}`)) {
                        delItem(txn.id);
                    }
                }}>DELETE</button>
        </div>
    </div>
);

export default TxnRow;