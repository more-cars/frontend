import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/car-model-variants/findConnectedMagazineIssues"
import {
    CarModelVariantIsPresentedInMagazineIssueRelationship
} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsPresentedInMagazineIssueRelationship"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"

describe('Collect connected MAGAZINE ISSUES for the CAR MODEL VARIANT detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeMagazineIssue.data} as unknown as CarModelVariantIsPresentedInMagazineIssueRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeMagazineIssue.data} as unknown as CarModelVariantIsPresentedInMagazineIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(2)
    })
})
