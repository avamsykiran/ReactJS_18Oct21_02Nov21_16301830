import { Component } from 'react';
import txnService from '../services/TxnService';
import TxnRow from './TxnRow';
import TxnSummary from './TxnSummary';

class Statement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txns: txnService.getAll()
        };
    }

    render() {
        return (
            <div className="container-fluid p-4">
                <h3>Account Statement</h3>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>TxnId</th>
                            <th>Header</th>
                            <th>Credit</th>
                            <th>Debit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.txns.map(t => <TxnRow txn={t} key={t.id} />)}
                    </tbody>
                    <tfoot>
                        <TxnSummary txns={this.state.txns} />
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Statement;