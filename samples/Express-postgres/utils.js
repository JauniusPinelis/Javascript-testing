

function addRandomDescription(inputString) {
    const descriptions = [
        "which is known for its vibrant colors.",
        "that has a mysterious origin.",
        "celebrated for its unique flavor.",
        "famous for its historical significance.",
        "renowned for its breathtaking scenery.",
        "admired for its artistic beauty.",
        "which is a key part of local traditions.",
        "that has a unique architectural style.",
        "well-loved by the community.",
        "that attracts many tourists every year.",
        "which is an example of exceptional craftsmanship.",
        "noted for its peaceful ambiance."
    ];

    // Choose a random description
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];

    // Concatenate the input string with the chosen description
    const outputString = inputString + " " + randomDescription;

    return outputString;
}

module.exports = {
    addRandomDescription,
    test: addRandomDescription
};
