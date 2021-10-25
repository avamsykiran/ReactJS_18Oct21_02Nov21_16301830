import { Component } from "react";

class TxnForm extends Component {

    constructor(props) {
        super(props);
        this.initalState = {
            id:0,
            header:'',
            amount:0,
            dot:'',
            type:''
        };
        this.state={...this.initalState}; 
    }

    handleFormSubmit = event => {
        event.preventDefault();

        this.props.passTxnToParent({...this.state});

        this.setState({...this.initalState});
    };

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <div class="row">
                    <div className="col-2">
                        <input type="date" className="form-control" 
                        placeholder="Txn Date" value={this.state.dot}
                        onChange={e => this.setState({dot:e.target.value})}/>
                    </div>
                    <div className="col-1">
                        <input type="number" className="form-control" 
                        placeholder="Txn Id" value={this.state.id}
                        onChange={e => this.setState({id:parseInt(e.target.value??0)})}/>
                    </div>
                    <div className="col">
                        <input type="input" className="form-control" 
                        placeholder="Header" value={this.state.header}
                        onChange={e => this.setState({header:e.target.value})}/>
                    </div>
                    <div className="col-1">
                        <input type="number" className="form-control" 
                        placeholder="Amount" value={this.state.amount}
                        onChange={e => this.setState({amount:parseFloat(e.target.value??0)})}/>
                    </div>
                    <div className="col-1">
                        <select className="form-control" value={this.state.type}
                         onChange={e => this.setState({type:e.target.value})}>
                            <option value="EARNING">EARNING</option>
                            <option value="EXPENSE">EXPENSE</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary btn-sm">ADD</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TxnForm;