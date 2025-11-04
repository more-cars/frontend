import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findNodeById} from "../../../../src/models/brands/findNodeById"

describe('Collect node for the BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeById').mockResolvedValue(false)

        expect(await findNodeById(1))
            .toEqual(false)
    })

    test('when the BRAND exists', async () => {
        const node = {id: 1, name: "dummy 1"}
        vi.spyOn(BrandDataFacade, 'getNodeById').mockResolvedValue(node)

        expect(await findNodeById(1))
            .toEqual(node)
    })
})
