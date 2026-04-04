import {describe, expect, test, vi} from "vitest"
import {VideoDataFacade} from "../../../../../src/data/VideoDataFacade"
import {findConnectedNodes} from "../../../../../src/models/node-types/videos/findConnectedNodes"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import {VideoBelongsToNodeRelationship} from "../../../../../src/data/node-types/videos/types/VideoBelongsToNodeRelationship"

describe('Collect connected NODES for the VIDEO detail page', () => {
    test('when no NODES are connected', async () => {
        vi.spyOn(VideoDataFacade, 'getConnectedNodeNodes').mockResolvedValue([])

        expect(await findConnectedNodes(12345678))
            .toHaveLength(0)
    })

    test('when there are NODES connected', async () => {
        vi.spyOn(VideoDataFacade, 'getConnectedNodeNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeBrand.data} as unknown as VideoBelongsToNodeRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeBrand.data} as unknown as VideoBelongsToNodeRelationship,
        ])

        expect(await findConnectedNodes(12345678))
            .toHaveLength(2)
    })
})
