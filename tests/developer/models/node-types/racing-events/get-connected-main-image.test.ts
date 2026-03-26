import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-events/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {RacingEventHasMainImageRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING EVENT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as RacingEventHasMainImageRelationship

        vi.spyOn(RacingEventDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
