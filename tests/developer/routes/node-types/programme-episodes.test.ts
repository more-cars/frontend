import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/programme-episodes/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/programme-episodes/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {ProgrammeEpisode} from "../../../../src/models/node-types/programme-episodes/types/ProgrammeEpisode"

describe('Programme Episodes', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/programme-episodes')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.PROGRAMME_EPISODE,
                fields: {},
            } as ProgrammeEpisode))

        await supertestGet('/programme-episode-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
