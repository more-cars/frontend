import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/race-tracks/findConnectedMainImage"
import {RaceTrackHasMainImageRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACE TRACK detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RaceTrackHasMainImageRelationship
        vi.spyOn(RaceTrackDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
