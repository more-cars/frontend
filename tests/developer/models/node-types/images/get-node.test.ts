import {describe, expect, test, vi} from "vitest"
import {findNodeById} from "../../../../../src/models/node-types/images/findNodeById"
import {ImageDataFacade} from "../../../../../src/data/ImageDataFacade"
import type {ImageNode} from "../../../../../src/data/node-types/images/types/ImageNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        vi.spyOn(ImageDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the IMAGE exists', async () => {
        const node = {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy 1"}} as ImageNode
        vi.spyOn(ImageDataFacade, 'getNodeById').mockResolvedValue(node)

        const image = await findNodeById(1)

        expect(image?.fields.id).toEqual(node.data.id)
        expect(image?.fields.name).toEqual(node.data.name)
    })
})
