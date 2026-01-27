import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/race-tracks/findNodeById"
import type {RaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackNode"

describe('Collect node for the RACE TRACK detail page', () => {
    test('when the RACE TRACK does not exist', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the RACE TRACK exists', async () => {
        const node = {id: 1, name: "dummy 1"} as RaceTrackNode
        vi.spyOn(RaceTrackDataFacade, 'getNodeById').mockResolvedValue(node)

        const raceTrack = await findNodeById(1)

        expect(raceTrack?.id).toEqual(node.id)
        expect(raceTrack?.name).toEqual(node.name)
    })
})
