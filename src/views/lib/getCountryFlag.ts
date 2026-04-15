export function getCountryFlag(countryCode: string) {
    if (!countryCode || countryCode === '--') {
        return null
    }

    if (countryCode.toLowerCase() === 'world') {
        return '🌍'
    }

    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
}
