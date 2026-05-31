import {describe, expect, test, vi} from "vitest"
import {BookDataFacade} from "../../../../../src/data/BookDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/books/findNodeById"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {BookNode} from "../../../../../src/data/node-types/books/types/BookNode"

describe('Collect node for the BOOK detail page', () => {
    test('when the BOOK does not exist', async () => {
        vi.spyOn(BookDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the BOOK exists', async () => {
        const node = {type: DataNodeType.BOOK, data: {id: 11111118, title: "dummy 1"}} as BookNode
        vi.spyOn(BookDataFacade, 'getNodeById').mockResolvedValue(node)

        const book = await findNodeById(11111118)

        expect(book?.fields.id).toEqual(node.data.id)
        expect(book?.fields.title).toEqual(node.data.title)
    })
})
