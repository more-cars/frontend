import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../src/data/requestDataFromApi"
import {NodeDataFacade} from "../../../../src/data/NodeDataFacade"
import {FakeImage} from "../../../_toolbox/fixtures/node-types/FakeImage"
import {ApiNodeType} from "../../../../src/data/types/ApiNodeType"

describe('Fetching main images for a collection of nodes', () => {
    test('when 0 nodes are provided', async () => {
        const mainImages = await NodeDataFacade.getMainImagesOfNodes([])

        expect(mainImages.length)
            .toEqual(0)
    })

    test('when 1 node is provided', async () => {
        const nodeId = 12345678

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => ({
                data: [{
                    type: ApiNodeType.IMAGE,
                    id: 87654321,
                    attributes: {...FakeImage.data.data, start_node_id: nodeId},
                }]
            }))

        const mainImages = await NodeDataFacade.getMainImagesOfNodes([nodeId])

        expect(mainImages.length)
            .toEqual(1)

        expect(mainImages[0].source_node_id)
            .toEqual(nodeId)
    })

    test('when multiple nodes are provided', async () => {
        const nodeIds = [12345678, 23456789, 34567890]

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => ({
                data: [
                    {
                        type: ApiNodeType.IMAGE,
                        id: 87654321,
                        attributes: {...FakeImage.data.data, start_node_id: nodeIds[0]},
                    },
                    {
                        type: ApiNodeType.IMAGE,
                        id: 76543210,
                        attributes: {...FakeImage.data.data, start_node_id: nodeIds[1]},
                    },
                    {
                        type: ApiNodeType.IMAGE,
                        id: 65432109,
                        attributes: {...FakeImage.data.data, start_node_id: nodeIds[2]},
                    }
                ]
            }))

        const mainImages = await NodeDataFacade.getMainImagesOfNodes(nodeIds)

        expect(mainImages.length)
            .toEqual(3)

        expect(mainImages[0].source_node_id)
            .toEqual(nodeIds[0])

        expect(mainImages[1].source_node_id)
            .toEqual(nodeIds[1])

        expect(mainImages[2].source_node_id)
            .toEqual(nodeIds[2])
    })
})
