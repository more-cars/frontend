import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/magazines/findNodeById"
import type {MagazineNode} from "../../../../../src/data/node-types/magazines/types/MagazineNode"

describe('Collect node for the MAGAZINE detail page', () => {
    test('when the MAGAZINE does not exist', async () => {
        vi.spyOn(MagazineDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the MAGAZINE exists', async () => {
        const node = {id: 1, name: "dummy 1"} as MagazineNode
        vi.spyOn(MagazineDataFacade, 'getNodeById').mockResolvedValue(node)

        const magazine = await findNodeById(1)

        expect(magazine?.id).toEqual(node.id)
        expect(magazine?.name).toEqual(node.name)
    })
})
