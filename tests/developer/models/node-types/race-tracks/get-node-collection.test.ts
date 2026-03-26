import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/race-tracks/findAllNodes"
import type {RaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the RACE TRACK overview page', () => {
    test('when there exist no RACE TRACKS', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACE TRACKS', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.RACE_TRACK, data: {id: 11111118, name: "dummy 1"}} as RaceTrackNode,
            {type: DataNodeType.RACE_TRACK, data: {id: 12222228, name: "dummy 2"}} as RaceTrackNode,
            {type: DataNodeType.RACE_TRACK, data: {id: 13333338, name: "dummy 3"}} as RaceTrackNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACE TRACKS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.RACE_TRACK, data: {id: i, name: "dummy " + i}} as RaceTrackNode)
        }

        vi.spyOn(RaceTrackDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
