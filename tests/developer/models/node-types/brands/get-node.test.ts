import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/brands/findNodeById"
import type {BrandNode} from "../../../../../src/data/node-types/brands/types/BrandNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the BRAND exists', async () => {
        const node = {type: DataNodeType.BRAND, data: {id: 11111118, name: "dummy 1"}} as BrandNode
        vi.spyOn(BrandDataFacade, 'getNodeById').mockResolvedValue(node)

        const brand = await findNodeById(11111118)

        expect(brand?.fields.id).toEqual(node.data.id)
        expect(brand?.fields.name).toEqual(node.data.name)
    })
})
