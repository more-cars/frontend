/**
 * Old nodes and relationships (More Cars 1.x) have IDs with a length of 1 to 6 digits.
 * More Cars 2.x uses 8-digit wide IDs.
 * To make them compatible, the old IDs are converted to 8-digit by adding 10 million.
 */
export function convertLegacyId(id: string) {
    const legacyIdPattern = /^([0-9]{1,6})$/
    const match = id.match(legacyIdPattern)

    if (match) {
        return parseInt(match[1]) + 10_000_000
    }

    return parseInt(id)
}
