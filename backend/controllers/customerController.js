const customers = require("../data/customers.json");

const getCustomers = (req, res) => {
    res.status(200).json(customers);
};

const getCustomerById = (req, res) => {
    const id = Number(req.params.id);

    const customer = customers.find(
        (item) => item.id === id
    );

    if (!customer) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }

    res.status(200).json(customer);
};

module.exports = {
    getCustomers,
    getCustomerById
};