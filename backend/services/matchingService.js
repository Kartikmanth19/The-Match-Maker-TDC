function calculateMatchScore(
    customer,
    candidate
) {
    let score = 0;

    if (
        customer.gender === candidate.gender
    ) {
        return 0;
    }

    if (customer.gender === "Male") {

        if (
            candidate.age < customer.age
        ) {
            score += 20;
        }

        if (
            candidate.income <
            customer.income
        ) {
            score += 15;
        }

        if (
            candidate.height <
            customer.height
        ) {
            score += 15;
        }

        if (
            candidate.wantKids ===
            customer.wantKids
        ) {
            score += 20;
        }

        if (
            candidate.openToRelocate ===
            customer.openToRelocate
        ) {
            score += 10;
        }

        if (
            candidate.openToPets ===
            customer.openToPets
        ) {
            score += 10;
        }

        if (
            candidate.city ===
            customer.city
        ) {
            score += 10;
        }

    } else {


        if (
            candidate.wantKids ===
            customer.wantKids
        ) {
            score += 20;
        }

        if (
            candidate.openToRelocate ===
            customer.openToRelocate
        ) {
            score += 20;
        }

        if (
            candidate.openToPets ===
            customer.openToPets
        ) {
            score += 15;
        }

        if (
            candidate.city ===
            customer.city
        ) {
            score += 10;
        }

        if (
            candidate.designation ===
            customer.designation
        ) {
            score += 15;
        }

        if (
            candidate.religion ===
            customer.religion
        ) {
            score += 10;
        }

        if (
            candidate.familyValues ===
            customer.familyValues
        ) {
            score += 10;
        }
    }

    if (score > 100) {
        score = 100;
    }

    return score;
}

module.exports = {
    calculateMatchScore,
};