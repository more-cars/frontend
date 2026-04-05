import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/magazine-issues/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {MagazineIssueHasVideoRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueHasVideoRelationship"

describe('Collect connected VIDEOS for the MAGAZINE ISSUE detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as MagazineIssueHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as MagazineIssueHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
