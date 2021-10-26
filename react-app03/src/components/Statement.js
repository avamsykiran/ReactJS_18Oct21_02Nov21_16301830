import { Component } from 'react';
import txnService from '../services/TxnService';
import TxnForm from './TxnForm';
import TxnRow from './TxnRow';
import TxnSummary from './TxnSummary';

class Statement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txns: txnService.getAll()
        };
    }

    addItem = item => {
        txnService.add(item);
        this.setState({txns:txnService.getAll()});
    }

    delItemById = id => {
        txnService.remove(id);
        this.setState({txns:txnService.getAll()});
    }

    render() {
        return (
            <div className="container-fluid p-4">
                <h3>Account Statement</h3>

                <div className="border border-info">
                    <div class="row">
                        <div className="col-2 fw-bolder">Date</div>
                        <div className="col-1 fw-bolder">TxnId</div>
                        <div className="col fw-bolder">Header</div>
                        <div className="col-1 fw-bolder">Credit</div>
                        <div className="col-1 fw-bolder">Debit</div>
                        <div className="col-3 fw-bolder">Action</div>
                    </div>
                    <TxnForm passTxnToParent={this.addItem} />
                    {this.state.txns.map(t => <TxnRow txn={t} key={t.id} delItem={this.delItemById} />)}
                    <TxnSummary txns={this.state.txns} />
                </div>
            </div>
        );
    }
}

export default Statement;