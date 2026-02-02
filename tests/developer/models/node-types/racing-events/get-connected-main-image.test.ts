import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-events/findConnectedMainImage"
import {RacingEventHasMainImageRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING EVENT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingEventHasMainImageRelationship
        vi.spyOn(RacingEventDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
