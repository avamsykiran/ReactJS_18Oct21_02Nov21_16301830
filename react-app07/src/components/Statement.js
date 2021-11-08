import { connect } from 'react-redux';
import TxnForm from './TxnForm';
import TxnRow from './TxnRow';
import TxnSummary from './TxnSummary';
import { createLoadDataAction } from '../state/actions'
import { useEffect } from 'react';

const Statement = ({ txns, shallWait, errMsg, loadData }) => {

    useEffect(loadData, []);

    return (
        <div className="container-fluid p-4">
            <h3>Account Statement</h3>

            {shallWait &&
                <div className="alert alert-info p-2">
                    <strong>Please wait while loading data</strong>
                </div>
            }

            {errMsg &&
                <div className="alert alert-danger p-2">
                    <strong>{errMsg}</strong>
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
                    <TxnForm />
                    {txns.map(t => t.isEditing ?
                        <TxnForm key={t.id} txnToEdit={t} /> :
                        <TxnRow key={t.id} txn={t} />)}
                    <TxnSummary txns={txns} />
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    txns: state.txns,
    shallWait:state.shallWait,
    errMsg:state.errMsg
});

const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(createLoadDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
