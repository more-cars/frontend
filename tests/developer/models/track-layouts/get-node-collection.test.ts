import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../src/data/TrackLayoutDataFacade"
import {findAllNodes} from "../../../../src/models/node-types/track-layouts/findAllNodes"
import type {TrackLayoutNode} from "../../../../src/data/node-types/track-layouts/types/TrackLayoutNode"

describe('Collect node collection for the TRACK LAYOUT overview page', () => {
    test('when there exist no TRACK LAYOUTS', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple TRACK LAYOUTS', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as TrackLayoutNode,
            {id: 2, name: "dummy 2"} as TrackLayoutNode,
            {id: 3, name: "dummy 3"} as TrackLayoutNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 TRACK LAYOUTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as TrackLayoutNode)
        }

        vi.spyOn(TrackLayoutDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
