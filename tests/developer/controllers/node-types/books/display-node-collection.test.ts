import {afterEach, describe, expect, test, vi} from "vitest"
import {BookControllerFacade} from "../../../../../src/controllers/BookControllerFacade"
import {BookModelFacade} from "../../../../../src/models/BookModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeBook} from "../../../../_toolbox/fixtures/node-types/FakeBook"
import type {Book} from "../../../../../src/models/node-types/books/types/Book"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the BOOK overview page', () => {
    test('when there exist no BOOKS', async () => {
        const spy = vi.spyOn(BookControllerFacade, 'showAllNodes')

        vi.spyOn(BookModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/books')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when there exist multiple BOOKS', async () => {
        const spy = vi.spyOn(BookControllerFacade, 'showAllNodes')

        vi.spyOn(BookModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeBook.model,
                FakeBook.model,
                FakeBook.model,
            ] satisfies Book[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/books')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when the search params are invalid', async () => {
        const response = await supertestGet('/books?sort_direction=blubb')

        expect(response.statusCode)
            .toBe(400)
    })
})
