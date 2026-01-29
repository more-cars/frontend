import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-series/findConnectedMainImage"
import {RacingSeriesHasMainImageRelationship} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING SERIES detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingSeriesHasMainImageRelationship
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
