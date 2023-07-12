const reverseWords = (str) => {

    const strReversed = 
        str
        .split("")
        .reverse()
        .toString()
        .replaceAll(",", "");

    const strSentenceReversed = 
        strReversed
        .split(" ")
        .reverse()
        .toString()
        .replaceAll(",", " ");

    return strSentenceReversed;
};

module.exports = {
    reverseWords
}