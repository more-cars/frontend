import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/companies/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {CompanyHasVideoRelationship} from "../../../../../src/data/node-types/companies/types/CompanyHasVideoRelationship"

describe('Collect connected VIDEOS for the COMPANY detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as CompanyHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as CompanyHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
