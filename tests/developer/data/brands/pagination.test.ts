import {afterEach, describe, expect, test, vi} from "vitest"
import {getApiRequestUrl} from "../../../../src/data/lib/getApiRequestUrl"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"

afterEach(() => {
    vi.resetModules()
})

describe('Pagination', () => {
    test.each([
        [undefined, 1],
        [NaN, 1],
        [-2, 1],
        [-1, 1],
        [0, 1],
        [1, 1],
        [2, 2],
        [111_222_333, 111_222_333],
    ])('API URL is correctly assembled for page = $0', async (pageIn, pageOut) => {
        const url = getApiRequestUrl(DataNodeType.BRAND, {page: pageIn})

        expect(url).to.equal('/brands?sort_by_property=name&page=' + pageOut)
    })
})
