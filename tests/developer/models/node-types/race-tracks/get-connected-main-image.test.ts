import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/race-tracks/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {RaceTrackHasMainImageRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACE TRACK detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as RaceTrackHasMainImageRelationship

        vi.spyOn(RaceTrackDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
