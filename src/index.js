const reverseWords = (str) => {

    const strReversed = 
        str
        .split("")
        .reverse()
        .toString()
        .replaceAll(",", "");

    return strReversed;
};

module.exports = {
    reverseWords
}