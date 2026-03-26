import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/car-models/findConnectedMagazineIssues"
import {CarModelCoveredByMagazineIssueRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelCoveredByMagazineIssueRelationship"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"

describe('Collect connected MAGAZINE ISSUES for the CAR MODEL detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 12222228, title: "dummy 2", partner_node: FakeMagazineIssue.data} as unknown as CarModelCoveredByMagazineIssueRelationship,
            {id: 13333338, title: "dummy 3", partner_node: FakeMagazineIssue.data} as unknown as CarModelCoveredByMagazineIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(2)
    })
})
