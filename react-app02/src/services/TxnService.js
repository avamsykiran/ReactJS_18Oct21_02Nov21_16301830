
let txns = [
    {id:1,header:'Salary',amount:55000,dot:'2021-01-01',type:'EARNING'},
    {id:2,header:'Rent',amount:5000,dot:'2021-01-02',type:'EXPENSE'},
    {id:3,header:'Mobile Bill',amount:500,dot:'2021-01-02',type:'EXPENSE'},
    {id:4,header:'Internet Bill',amount:500,dot:'2021-01-03',type:'EXPENSE'},
    {id:5,header:'Car EMI',amount:5500,dot:'2021-01-05',type:'EXPENSE'}
];

export default {
    getAll : () => txns,

    getById: id => txns.find(t => t.id===id),

    add: txn => txns.push(txn),

    update: txn => {
        let index=txns.findIndex(t => t.id===txn.id);
        if(index===-1)
            throw "No such transaction found";
        txns[index]=txn;
    },

    remove: id => {
        let index=txns.findIndex(t => t.id===id);
        if(index===-1)
            throw "No such transaction found";
        txns.splice(index,1);
    }
};