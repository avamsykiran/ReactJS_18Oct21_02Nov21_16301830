import { useState, useEffect } from 'react';

const Counter2 = (props) => {
    console.log(`${new Date().toTimeString()} counter2 render method is called`);

    let [count, setCount] = useState(0);
    let [trip,setTrip] = useState(0);

    useEffect(() => {
        console.log(`${new Date().toTimeString()} counter2 useEffect with empty dependencies CallBack method is called`);
        setCount(1);
        setTrip(1);
    }, []);

    useEffect(() => {
        console.log(`${new Date().toTimeString()} counter2 useEffect with no dependencies CallBack method is called`);
    });

    useEffect(() => {
        console.log(`${new Date().toTimeString()} counter2 useEffect with [count] as dependencies CallBack method is called`);
        if(count===10){
            setCount(0);
            setTrip(trip+1);  
        }
    },[count]);

    useEffect(() => {
        console.log(`${new Date().toTimeString()} counter2 useEffect with [trip] as dependencies CallBack method is called`);
    },[trip]);

    return (
        <div className="container-fluid p-4">
            <div className="text-center m-2">
                <p>
                    Count#<strong>{count}</strong> of Trip#<strong>{trip}</strong>
                </p>
                <button class="btn btn-sm btn-primary ml-2"
                    onClick={e => setCount(count + 1)}>
                    INCREMENT
                </button>
            </div>
        </div>
    );
}

export default Counter2;