import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/gaming-platforms/findNodeById"
import type {GamingPlatformNode} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the GAMING PLATFORM detail page', () => {
    test('when the GAMING PLATFORM does not exist', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the GAMING PLATFORM exists', async () => {
        const node = {type: DataNodeType.GAMING_PLATFORM, data: {id: 1, name: "dummy 1"}} as GamingPlatformNode
        vi.spyOn(GamingPlatformDataFacade, 'getNodeById').mockResolvedValue(node)

        const gamingPlatform = await findNodeById(1)

        expect(gamingPlatform?.fields.id).toEqual(node.data.id)
        expect(gamingPlatform?.fields.name).toEqual(node.data.name)
    })
})
