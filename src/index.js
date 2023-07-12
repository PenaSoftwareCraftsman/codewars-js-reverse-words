const reverseWords = (str) => {

    const strReversed = 
        str
        .split("")
        .reverse()
        .toString()
        .replace(",", "");

    return strReversed;
};

module.exports = {
    reverseWords
}