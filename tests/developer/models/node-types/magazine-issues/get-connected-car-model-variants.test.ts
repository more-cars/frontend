import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/magazine-issues/findConnectedCarModelVariants"
import {MagazineIssuePresentsCarModelVariantRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssuePresentsCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANTS for the MAGAZINE ISSUE detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MagazineIssuePresentsCarModelVariantRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MagazineIssuePresentsCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(1))
            .toHaveLength(2)
    })
})
