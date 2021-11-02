import { Fragment } from "react";
import { connect } from 'react-redux';

const TxnSummary = ({ totalC, totalD, bal }) => (
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

const mapStateToProps = state => ({
    totalC:state.totalCredit,
    totalD:state.totalDebit,
    bal:state.balance
});

const mapDispatchToProps = null;

export default connect(mapStateToProps,mapDispatchToProps)(TxnSummary);