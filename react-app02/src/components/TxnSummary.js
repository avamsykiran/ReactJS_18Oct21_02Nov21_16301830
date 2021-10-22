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
            <tr>
                <th className="text-end" colSpan="3">Total</th>
                <th className="text-end">{totalC}</th>
                <th className="text-end">{totalD}</th>
            </tr>
            <tr>
                <th className="text-end" colSpan="4">Balance</th>
                <th className="text-end">{bal}</th>
            </tr>
        </Fragment>

    );
}
export default TxnSummary;