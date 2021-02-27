export function checkPassword(password) {
    // eslint-disable-next-line no-control-regex
    const containsNumbers = /(?=.*\d)/
    const containsUppercase = /(?=.*[A-Z])/
    const containsLowercase = /(?=.*[a-z])/
    const containsSpecialCharacter = /(?=.*[@$!%*?&])/
    const containsMinimumEightCharacters = /[A-Za-z\d@$!%*?&]{8,}/
    return {
        numbers: containsNumbers.test(password),
        upperCase: containsUppercase.test(password),
        lowerCase: containsLowercase.test(password),
        specialCharacter: containsSpecialCharacter.test(password),
        minimumCharacter: containsMinimumEightCharacters.test(password)
    }
}