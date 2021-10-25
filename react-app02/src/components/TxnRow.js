const TxnRow = props => (
    <div className="row">
        <div className="col-2">{props.txn.dot}</div>
        <div className="col-1">{props.txn.id}</div>
        <div className="col">{props.txn.header}</div>
        <div className="col-1 text-end">{props.txn.type === 'EARNING' ? props.txn.amount : undefined}</div>
        <div className="col-1 text-end">{props.txn.type === 'EXPENSE' ? props.txn.amount : undefined}</div>
        <div className="col-3">
            <button className="btn btn-secondary btn-sm mr-2">EDIT</button>
            <button className="btn btn-danger btn-sm"
                onClick={e => {
                    if (window.confirm(`Are you sure of deleting txn#${props.txn.id}`)) {
                        props.delItem(props.txn.id);
                    }
                }}>DELETE</button>
        </div>
    </div>
);

export default TxnRow;