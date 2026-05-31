import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeBook} from "../../../../_toolbox/fixtures/node-types/FakeBook"
import {BookModelFacade} from "../../../../../src/models/BookModelFacade"
import * as node from "../../../../../src/controllers/node-types/books/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a BOOK detail page', () => {
    test('when the BOOK does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/book-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the BOOK exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeBook.model))
        vi.spyOn(BookModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeBook.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/book-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
