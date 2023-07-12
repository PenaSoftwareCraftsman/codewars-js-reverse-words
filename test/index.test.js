describe('reverseWords', () => {
    it('Should return a empty string when a empty string is passed', () => {
        let str = "";
        let strExpected = "";

        expect(reverseWords(str)).toBe(strExpected);
    });
});