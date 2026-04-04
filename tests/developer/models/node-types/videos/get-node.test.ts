import {describe, expect, test, vi} from "vitest"
import {VideoDataFacade} from "../../../../../src/data/VideoDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/videos/findNodeById"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {VideoNode} from "../../../../../src/data/node-types/videos/types/VideoNode"

describe('Collect node for the VIDEO detail page', () => {
    test('when the VIDEO does not exist', async () => {
        vi.spyOn(VideoDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the VIDEO exists', async () => {
        const node = {type: DataNodeType.VIDEO, data: {id: 11111118, title: "dummy 1"}} as VideoNode
        vi.spyOn(VideoDataFacade, 'getNodeById').mockResolvedValue(node)

        const video = await findNodeById(11111118)

        expect(video?.fields.id).toEqual(node.data.id)
        expect(video?.fields.title).toEqual(node.data.title)
    })
})
