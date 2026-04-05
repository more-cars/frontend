import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/magazines/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {MagazineHasVideoRelationship} from "../../../../../src/data/node-types/magazines/types/MagazineHasVideoRelationship"

describe('Collect connected VIDEOS for the MAGAZINE detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as MagazineHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as MagazineHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
