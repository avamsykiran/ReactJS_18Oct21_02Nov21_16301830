const TxnRow = props => (
    <tr>
        <td>{props.txn.dot}</td>
        <td>{props.txn.id}</td>
        <td>{props.txn.header}</td>
        <td className="text-end">{props.txn.type==='EARNING'?props.txn.amount:undefined}</td>
        <td className="text-end">{props.txn.type==='EXPENSE'?props.txn.amount:undefined}</td>
    </tr>
);

export default TxnRow;