import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/race-tracks/findConnectedImages"
import {RaceTrackHasImageRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHasImageRelationship"

describe('Collect connected IMAGES for the RACE TRACK detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RaceTrackHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RaceTrackHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
