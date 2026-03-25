import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/race-tracks/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/race-tracks/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {RaceTrack} from "../../../../src/models/node-types/race-tracks/types/RaceTrack"

describe('Race Tracks', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/race-tracks')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.RACE_TRACK,
                fields: {},
            } as RaceTrack))

        await supertestGet('/race-track-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
