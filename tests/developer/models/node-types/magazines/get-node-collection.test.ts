import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/magazines/findAllNodes"
import type {MagazineNode} from "../../../../../src/data/node-types/magazines/types/MagazineNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the MAGAZINE overview page', () => {
    test('when there exist no MAGAZINES', async () => {
        vi.spyOn(MagazineDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple MAGAZINES', async () => {
        vi.spyOn(MagazineDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.MAGAZINE, data: {id: 11111118, name: "dummy 1"}} as MagazineNode,
            {type: DataNodeType.MAGAZINE, data: {id: 12222228, name: "dummy 2"}} as MagazineNode,
            {type: DataNodeType.MAGAZINE, data: {id: 13333338, name: "dummy 3"}} as MagazineNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 MAGAZINES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.MAGAZINE, data: {id: i, name: "dummy " + i}} as MagazineNode)
        }

        vi.spyOn(MagazineDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
