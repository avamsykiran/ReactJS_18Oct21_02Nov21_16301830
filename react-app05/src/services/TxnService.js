import axios from 'axios';

const TXNS_API = "http://localhost:9000/txns";

const txnService = {
    getAll : () => axios.get(TXNS_API),

    getById: id => axios.get(`${TXNS_API}/${id}`),

    add: txn => axios.post(TXNS_API,txn),

    update: txn => axios.put(`${TXNS_API}/${txn.id}`,txn),

    remove: id => axios.delete(`${TXNS_API}/${id}`),
};

export default txnService;