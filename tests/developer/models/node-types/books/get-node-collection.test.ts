import {describe, expect, test, vi} from "vitest"
import {BookDataFacade} from "../../../../../src/data/BookDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/books/findAllNodes"
import type {BookNode} from "../../../../../src/data/node-types/books/types/BookNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the BOOK overview page', () => {
    test('when there exist no BOOKS', async () => {
        vi.spyOn(BookDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple BOOKS', async () => {
        vi.spyOn(BookDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.BOOK, data: {id: 1, title: "dummy 1"}} as BookNode,
            {type: DataNodeType.BOOK, data: {id: 2, title: "dummy 2"}} as BookNode,
            {type: DataNodeType.BOOK, data: {id: 3, title: "dummy 3"}} as BookNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 BOOKS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.BOOK, data: {id: i, title: "dummy " + i}} as BookNode)
        }

        vi.spyOn(BookDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
