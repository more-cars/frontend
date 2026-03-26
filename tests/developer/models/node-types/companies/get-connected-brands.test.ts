import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findConnectedBrands} from "../../../../../src/models/node-types/companies/findConnectedBrands"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import {CompanyHasBrandRelationship} from "../../../../../src/data/node-types/companies/types/CompanyHasBrandRelationship"

describe('Collect connected BRANDS for the COMPANY detail page', () => {
    test('when no BRANDS are connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedBrandNodes').mockResolvedValue([])

        expect(await findConnectedBrands(12345678))
            .toHaveLength(0)
    })

    test('when there are BRANDS connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedBrandNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 1", partner_node: FakeBrand.data} as unknown as CompanyHasBrandRelationship,
            {id: 13333338, name: "dummy 2", partner_node: FakeBrand.data} as unknown as CompanyHasBrandRelationship,
        ])

        expect(await findConnectedBrands(12345678))
            .toHaveLength(2)
    })
})
