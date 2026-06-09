function generateMatchReason(
    customer,
    match
) {

    const reasons = [];

    if (
        customer.wantKids ===
        match.wantKids
    ) {
        reasons.push(
            "both share similar views on having children"
        );
    }

    if (
        customer.openToRelocate ===
        match.openToRelocate
    ) {
        reasons.push(
            "their relocation preferences align well"
        );
    }

    if (
        customer.openToPets ===
        match.openToPets
    ) {
        reasons.push(
            "they have compatible lifestyle choices regarding pets"
        );
    }

    if (
        customer.city ===
        match.city
    ) {
        reasons.push(
            "they currently live in the same city"
        );
    }

    if (
        customer.religion ===
        match.religion
    ) {
        reasons.push(
            "they share similar cultural values"
        );
    }

    if (
        customer.designation ===
        match.designation
    ) {
        reasons.push(
            "they have similar professional backgrounds"
        );
    }

    if (
        reasons.length === 0
    ) {

        return `High Potential Match. ${match.firstName} demonstrates compatibility with ${customer.firstName} through balanced lifestyle preferences and future relationship goals.`;
    }

    return `High Potential Match. ${match.firstName} and ${customer.firstName} are compatible because ${reasons
        .slice(0, 3)
        .join(", ")}.`;
}

module.exports = {
    generateMatchReason,
};