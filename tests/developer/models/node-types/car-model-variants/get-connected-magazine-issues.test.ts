import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/car-model-variants/findConnectedMagazineIssues"
import {CarModelVariantIsPresentedInMagazineIssueRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsPresentedInMagazineIssueRelationship"

describe('Collect connected MAGAZINE ISSUES for the CAR MODEL VARIANT detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(1))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as CarModelVariantIsPresentedInMagazineIssueRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as CarModelVariantIsPresentedInMagazineIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(1))
            .toHaveLength(2)
    })
})
