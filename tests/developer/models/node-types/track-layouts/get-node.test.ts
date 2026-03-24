import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/track-layouts/findNodeById"
import type {TrackLayoutNode} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the TRACK LAYOUT detail page', () => {
    test('when the TRACK LAYOUT does not exist', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the TRACK LAYOUT exists', async () => {
        const node = {type: DataNodeType.TRACK_LAYOUT, data: {id: 1, name: "dummy 1"}} as TrackLayoutNode
        vi.spyOn(TrackLayoutDataFacade, 'getNodeById').mockResolvedValue(node)

        const trackLayout = await findNodeById(1)

        expect(trackLayout?.fields.id).toEqual(node.data.id)
        expect(trackLayout?.fields.name).toEqual(node.data.name)
    })
})
