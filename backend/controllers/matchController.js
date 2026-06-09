const customers = require("../data/customers.json");

const {
    calculateMatchScore,
} = require("../services/matchingService");

const {
    generateMatchReason,
} = require("../services/aiService");

const getMatches = async (
    req,
    res
) => {
    try {

        const id = Number(
            req.params.id
        );

        const customer =
            customers.find(
                (c) => c.id === id
            );

        if (!customer) {
            return res.status(404).json({
                message:
                    "Customer not found",
            });
        }

        const matches =
            customers
                .filter(
                    (candidate) =>
                        candidate.id !==
                        customer.id &&
                        candidate.gender !==
                        customer.gender
                )
                .map(
                    (candidate) => ({

                        ...candidate,

                        compatibility:
                            calculateMatchScore(
                                customer,
                                candidate
                            ),

                        aiReason:
                            generateMatchReason(
                                customer,
                                candidate
                            ),
                    })
                )
                .sort(
                    (a, b) =>
                        b.compatibility -
                        a.compatibility
                )
                .slice(0, 5);

        res.status(200).json(
            matches
        );

    } catch (error) {

        console.error(
            "MATCH CONTROLLER ERROR:",
            error
        );

        res.status(500).json({
            message:
                "Failed to generate matches",
        });
    }
};

module.exports = {
    getMatches,
};