import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/magazine-issues/findConnectedCarModelVariants"
import {MagazineIssuePresentsCarModelVariantRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssuePresentsCarModelVariantRelationship"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"

describe('Collect connected CAR MODEL VARIANTS for the MAGAZINE ISSUE detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModelVariant.data} as unknown as MagazineIssuePresentsCarModelVariantRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModelVariant.data} as unknown as MagazineIssuePresentsCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(2)
    })
})
