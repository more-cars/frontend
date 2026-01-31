import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/race-tracks/findAllNodes"
import type {RaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackNode"

describe('Collect node collection for the RACE TRACK overview page', () => {
    test('when there exist no RACE TRACKS', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACE TRACKS', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as RaceTrackNode,
            {id: 2, name: "dummy 2"} as RaceTrackNode,
            {id: 3, name: "dummy 3"} as RaceTrackNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACE TRACKS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as RaceTrackNode)
        }

        vi.spyOn(RaceTrackDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
