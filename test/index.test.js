const { reverseWords } = require('./../src/index')

describe('reverseWords', () => {
    it('Should return a empty string when a empty string is passed', () => {
        let str = "";
        let strExpected = "";

        expect(reverseWords(str)).toBe(strExpected);
    });


    it('Should return a string "a" when "a" is passed', () => {
        let str = "a";
        let strExpected = "a";

        expect(reverseWords(str)).toBe(strExpected);
    });

    it('Should return a string "ba" when "ab" is passed', () => {
        let str = "ab";
        let strExpected = "ba";

        expect(reverseWords(str)).toBe(strExpected);
    });

    it('Should return a string "ba" when "ab" is passed', () => {
        let str = "abc";
        let strExpected = "cba";

        expect(reverseWords(str)).toBe(strExpected);
    });

    it('Should return a string "ewq cba" when "qwe abc" is passed', () => {
        let str = "qwe abc";
        let strExpected = "ewq cba";

        expect(reverseWords(str)).toBe(strExpected);
    });

    it('Should return a string "ewq cba çlkj" when "qwe abc jklç" is passed', () => {
        let str = "qwe abc jklç";
        let strExpected = "ewq cba çlkj";

        expect(reverseWords(str)).toBe(strExpected);
    });
});