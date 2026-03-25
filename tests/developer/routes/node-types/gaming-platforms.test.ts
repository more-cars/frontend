import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/gaming-platforms/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/gaming-platforms/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {GamingPlatform} from "../../../../src/models/node-types/gaming-platforms/types/GamingPlatform"

describe('Gaming Platforms', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/gaming-platforms')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.GAMING_PLATFORM,
                fields: {},
            } as GamingPlatform))

        await supertestGet('/gaming-platform-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
