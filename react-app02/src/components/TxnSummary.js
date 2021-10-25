import { Fragment } from "react";

const TxnSummary = props => {
    let totalC=0;
    let totalD=0;

    if(props.txns && props.txns.length>0){
        let allCredits = props.txns.filter(t => t.type==='EARNING');
        if(allCredits && allCredits.length>0){
            totalC=allCredits.map(t => t.amount).reduce((a1,a2)=>a1+a2);
        }

        let allDebits = props.txns.filter(t => t.type==='EXPENSE');
        if(allDebits && allDebits.length>0){
            totalD=allDebits.map(t => t.amount).reduce((a1,a2)=>a1+a2);
        }
    }

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