import {describe, expect, test, vi} from "vitest"
import {VideoDataFacade} from "../../../../../src/data/VideoDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/videos/findAllNodes"
import type {VideoNode} from "../../../../../src/data/node-types/videos/types/VideoNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the VIDEO overview page', () => {
    test('when there exist no VIDEOS', async () => {
        vi.spyOn(VideoDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple VIDEOS', async () => {
        vi.spyOn(VideoDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.VIDEO, data: {id: 1, title: "dummy 1"}} as VideoNode,
            {type: DataNodeType.VIDEO, data: {id: 2, title: "dummy 2"}} as VideoNode,
            {type: DataNodeType.VIDEO, data: {id: 3, title: "dummy 3"}} as VideoNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 VIDEOS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.VIDEO, data: {id: i, title: "dummy " + i}} as VideoNode)
        }

        vi.spyOn(VideoDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
