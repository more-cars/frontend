import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-sessions/findConnectedMainImage"
import {RacingSessionHasMainImageRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING SESSION detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingSessionHasMainImageRelationship
        vi.spyOn(RacingSessionDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
