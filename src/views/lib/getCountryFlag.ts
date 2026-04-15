export function getCountryFlag(countryCode: string) {
    if (!countryCode || countryCode === '--') {
        return null
    }

    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
}
