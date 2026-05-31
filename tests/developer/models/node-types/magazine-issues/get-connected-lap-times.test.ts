import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedLapTimes} from "../../../../../src/models/node-types/magazine-issues/findConnectedLapTimes"
import {FakeLapTime} from "../../../../_toolbox/fixtures/node-types/FakeLapTime"
import {MagazineIssueDocumentsLapTimeRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueDocumentsLapTimeRelationship"

describe('Collect connected LAP TIMES for the MAGAZINE ISSUE detail page', () => {
    test('when no LAP TIMES are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedLapTimeNodes').mockResolvedValue([])

        expect(await findConnectedLapTimes(12345678))
            .toHaveLength(0)
    })

    test('when there are LAP TIMES connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedLapTimeNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeLapTime.data} as unknown as MagazineIssueDocumentsLapTimeRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeLapTime.data} as unknown as MagazineIssueDocumentsLapTimeRelationship,
        ])

        expect(await findConnectedLapTimes(12345678))
            .toHaveLength(2)
    })
})
