import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/track-layouts/findNodeById"
import type {TrackLayoutNode} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutNode"

describe('Collect node for the TRACK LAYOUT detail page', () => {
    test('when the TRACK LAYOUT does not exist', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the TRACK LAYOUT exists', async () => {
        const node = {id: 1, name: "dummy 1"} as TrackLayoutNode
        vi.spyOn(TrackLayoutDataFacade, 'getNodeById').mockResolvedValue(node)

        const trackLayout = await findNodeById(1)

        expect(trackLayout?.id).toEqual(node.id)
        expect(trackLayout?.name).toEqual(node.name)
    })
})
