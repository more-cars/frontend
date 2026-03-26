import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/gaming-platforms/findAllNodes"
import type {GamingPlatformNode} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the GAMING PLATFORM overview page', () => {
    test('when there exist no GAMING PLATFORMS', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple GAMING PLATFORMS', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.GAMING_PLATFORM, data: {id: 11111118, name: "dummy 1"}} as GamingPlatformNode,
            {type: DataNodeType.GAMING_PLATFORM, data: {id: 12222228, name: "dummy 2"}} as GamingPlatformNode,
            {type: DataNodeType.GAMING_PLATFORM, data: {id: 13333338, name: "dummy 3"}} as GamingPlatformNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 GAMING PLATFORMS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.GAMING_PLATFORM, data: {id: i, name: "dummy " + i}} as GamingPlatformNode)
        }

        vi.spyOn(GamingPlatformDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
