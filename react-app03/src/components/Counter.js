import { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0,trip:0 };
        console.log(`${new Date().toTimeString()} The cosntructor is called`);
    }

    render() {
        console.log(`${new Date().toTimeString()} render method is called`);

        return (
            <div className="container-fluid p-4">
                <div className="text-center m-2">
                    <p>
                        Count#<strong>{this.state.count}</strong> of Trip#<strong>{this.state.trip}</strong>
                    </p>
                    <button class="btn btn-sm btn-primary ml-2"
                        onClick={e => this.setState({ count: this.state.count + 1 })}>
                        INCREMENT
                    </button>
                </div>
            </div>
        );
    }

    componentDidUpdate(){
        console.log(`${new Date().toTimeString()} componentDidUpdate method is called`);
        if(this.state.count===10){
            this.setState({count:0,trip:this.state.trip+1});    
        }
    }

    componentDidMount(){
        console.log(`${new Date().toTimeString()} componentDidMount method is called`);
        this.setState({count:1,trip:1});
    }
}

export default Counter;