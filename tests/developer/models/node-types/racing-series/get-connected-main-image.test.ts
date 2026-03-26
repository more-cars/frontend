import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-series/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {RacingSeriesHasMainImageRelationship} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING SERIES detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as RacingSeriesHasMainImageRelationship

        vi.spyOn(RacingSeriesDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
