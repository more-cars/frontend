import {describe, expect, test, vi} from "vitest"
import {BookDataFacade} from "../../../../../src/data/BookDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/books/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {BookHasMainImageRelationship} from "../../../../../src/data/node-types/books/types/BookHasMainImageRelationship"

describe('Collect connected main IMAGE for the BOOK detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(BookDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 11111118, name: "dummy", partner_node: FakeImage.data}} as unknown as BookHasMainImageRelationship

        vi.spyOn(BookDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
