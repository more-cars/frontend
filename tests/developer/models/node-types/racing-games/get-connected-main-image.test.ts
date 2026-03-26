import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/racing-games/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {RacingGameHasMainImageRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameHasMainImageRelationship"

describe('Collect connected main IMAGE for the RACING GAME detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as RacingGameHasMainImageRelationship

        vi.spyOn(RacingGameDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
