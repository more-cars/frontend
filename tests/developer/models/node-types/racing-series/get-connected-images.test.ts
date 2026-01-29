import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/racing-series/findConnectedImages"
import {RacingSeriesHasImageRelationship} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesHasImageRelationship"

describe('Collect connected IMAGES for the RACING SERIES detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingSeriesHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingSeriesHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
