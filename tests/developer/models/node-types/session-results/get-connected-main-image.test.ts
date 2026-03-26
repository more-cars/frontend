import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/session-results/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {SessionResultHasMainImageRelationship} from "../../../../../src/data/node-types/session-results/types/SessionResultHasMainImageRelationship"

describe('Collect connected main IMAGE for the SESSION RESULT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as SessionResultHasMainImageRelationship

        vi.spyOn(SessionResultDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
