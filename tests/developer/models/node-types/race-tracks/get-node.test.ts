import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/race-tracks/findNodeById"
import type {RaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the RACE TRACK detail page', () => {
    test('when the RACE TRACK does not exist', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the RACE TRACK exists', async () => {
        const node = {type: DataNodeType.RACE_TRACK, data: {id: 11111118, name: "dummy 1"}} as RaceTrackNode
        vi.spyOn(RaceTrackDataFacade, 'getNodeById').mockResolvedValue(node)

        const raceTrack = await findNodeById(11111118)

        expect(raceTrack?.fields.id).toEqual(node.data.id)
        expect(raceTrack?.fields.name).toEqual(node.data.name)
    })
})
