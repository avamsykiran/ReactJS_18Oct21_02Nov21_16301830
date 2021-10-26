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

        this.state={
            txn: {...this.initalState},
            errs:[]
        }; 
    }

    handleFormSubmit = event => {
        event.preventDefault();

        let errs=[];

        let txn = this.state.txn; 

        if(!txn.id || txn.id<=0){
            errs.push("Transaction id can not zero or negative");
        }

        if(!txn.header || txn.header.trim().length==0){
            errs.push("Header can not be empty");
        }

        if(!txn.amount || txn.amount<=0){
            errs.push("Amount is a mandate field and can not be zero or negative");
        }

        if(!txn.dot || txn.dot.trim().length==0){
            errs.push("Date of Transaction is a mandate field");
        }

        if(!txn.type || txn.type.trim().length==0){
            errs.push("Type of Transaction is a mandate field");
        }

        if(errs.length>0){
            this.setState({errs});                              // Updating errors
        }else{
            this.props.passTxnToParent({...txn});               // passing txn to parent to add
            this.setState({txn:{...this.initalState},errs:[]}); // reseting the form and errors
        }
    };

    acceptVal = event => {
        let field = event.target.name;
        let value = event.target.type!='number'? event.target.value : parseInt(event.target.value) ;
        this.setState({txn:{...this.state.txn,[field]:value}});
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>

                {this.state.errs.length>0 && (
                    <div class="col-sm-6 mx-auto mt-1">                       
                        <div className="alert alert-danger p-1">
                            <h6>Please clear the below errors:</h6>
                            <ol>
                                {this.state.errs.map(err => <li>{err}</li>)}
                            </ol>
                        </div>
                    </div>    
                )}

                <div class="row">
                    <div className="col-2">
                        <input type="date" className="form-control" 
                        placeholder="Txn Date" value={this.state.dot} name="dot" onChange={this.acceptVal}/>
                    </div>
                    <div className="col-1">
                        <input type="number" className="form-control" 
                        placeholder="Txn Id" value={this.state.id} name="id" onChange={this.acceptVal}/>
                    </div>
                    <div className="col">
                        <input type="input" className="form-control" 
                        placeholder="Header" value={this.state.header} name="header" onChange={this.acceptVal}/>
                    </div>
                    <div className="col-1">
                        <input type="number" className="form-control" 
                        placeholder="Amount" value={this.state.amount} name="amount" onChange={this.acceptVal}/>
                    </div>
                    <div className="col-1">
                        <select className="form-control" value={this.state.type} name="type" onChange={this.acceptVal}>
                            <option value="">--SELECT--</option>
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