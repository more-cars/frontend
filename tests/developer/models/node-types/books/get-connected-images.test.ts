import {describe, expect, test, vi} from "vitest"
import {BookDataFacade} from "../../../../../src/data/BookDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/books/findConnectedImages"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {BookHasImageRelationship} from "../../../../../src/data/node-types/books/types/BookHasImageRelationship"

describe('Collect connected IMAGES for the BOOK detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(BookDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(BookDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as BookHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as BookHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
