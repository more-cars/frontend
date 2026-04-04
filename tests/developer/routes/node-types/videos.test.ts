import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/videos/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/videos/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Video} from "../../../../src/models/node-types/videos/types/Video"

describe('Videos', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/videos')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.VIDEO,
                fields: {},
            } as Video))

        await supertestGet('/video-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
