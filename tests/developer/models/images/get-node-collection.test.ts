import {describe, expect, test, vi} from "vitest"
import {findAllNodes} from "../../../../src/models/node-types/images/findAllNodes"
import {ImageDataFacade} from "../../../../src/data/ImageDataFacade"
import type {ImageNode} from "../../../../src/data/node-types/images/types/ImageNode"

describe('Collect node collection for the IMAGE overview page', () => {
    test('when there exist no IMAGES', async () => {
        vi.spyOn(ImageDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple IMAGES', async () => {
        vi.spyOn(ImageDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as ImageNode,
            {id: 2, name: "dummy 2"} as ImageNode,
            {id: 3, name: "dummy 3"} as ImageNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 IMAGES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as ImageNode)
        }

        vi.spyOn(ImageDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
