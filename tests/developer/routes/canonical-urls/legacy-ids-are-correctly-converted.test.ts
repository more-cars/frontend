import {describe, expect, test} from "vitest"
import {convertLegacyId} from "../../../../src/controllers/redirects/convertLegacyId"

describe('Legacy IDs are correctly converted', () => {
    test.each([
        ['0', 10000000],
        ['1', 10000001],
        ['12', 10000012],
        ['123', 10000123],
        ['1234', 10001234],
        ['12345', 10012345],
        ['123456', 10123456],
        ['999999', 10999999],
    ])('Legacy: $0', async (legacyId, canonicalId) => {
        expect(convertLegacyId(legacyId))
            .to.equal(canonicalId)
    })

    test.each([
        ['10000000', 10000000],
        ['12345678', 12345678],
        ['99999999', 99999999],
    ])('Modern: $0', async (legacyId, canonicalId) => {
        expect(convertLegacyId(legacyId))
            .to.equal(canonicalId)
    })
})
