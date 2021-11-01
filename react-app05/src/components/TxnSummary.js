import { Fragment } from "react";

const cumulativeAmount = (txns,type) => {
    let cumAmt=0;
    if(txns && txns.length>0){
        let filterdTxns = txns.filter(t => t.type===type);
        if(filterdTxns && filterdTxns.length>0){
            cumAmt=filterdTxns.map(t => t.amount).reduce((a1,a2)=>a1+a2);
        }
    }
    return cumAmt;
}

const TxnSummary = ({txns}) => {
    let totalC=cumulativeAmount(txns,'EARNING');
    let totalD=cumulativeAmount(txns,'EXPENSE');

    let bal = totalC-totalD;
 
    return (
        <Fragment>
            <div class="row">
                <div className="col fw-bolder text-end">Total</div>
                <div className="col-1 fw-bolder text-end">{totalC}</div>
                <div className="col-1 fw-bolder text-end">{totalD}</div>
                <div className="col-3"></div>
            </div>
            <div class="row">
                <div className="col fw-bolder text-end">Balance</div>
                <div className="col-1 fw-bolder text-end">{bal}</div>
                <div className="col-3"></div>
            </div>
        </Fragment>

    );
}
export default TxnSummary;