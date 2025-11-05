import {describe, expect, test, vi} from "vitest"
import {findNodeById} from "../../../../src/models/images/findNodeById"
import {ImageDataFacade} from "../../../../src/data/ImageDataFacade"
import type {ImageNode} from "../../../../src/data/images/types/ImageNode"

describe('Collect node for the IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        vi.spyOn(ImageDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the IMAGE exists', async () => {
        const node = {id: 1, name: "dummy 1"} as ImageNode
        vi.spyOn(ImageDataFacade, 'getNodeById').mockResolvedValue(node)

        expect(await findNodeById(1))
            .toEqual(node)
    })
})
