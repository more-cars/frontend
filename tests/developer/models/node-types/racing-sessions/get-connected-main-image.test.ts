import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-sessions/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {RacingSessionHasMainImageRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING SESSION detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as RacingSessionHasMainImageRelationship

        vi.spyOn(RacingSessionDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
