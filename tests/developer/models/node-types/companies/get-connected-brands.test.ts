import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findConnectedBrands} from "../../../../../src/models/node-types/companies/findConnectedBrands"
import {
    CompanyHasBrandRelationship
} from "../../../../../src/data/node-types/companies/types/CompanyHasBrandRelationship"

describe('Collect connected BRANDS for the COMPANY detail page', () => {
    test('when no BRANDS are connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedBrandNodes').mockResolvedValue([])

        expect(await findConnectedBrands(1))
            .toHaveLength(0)
    })

    test('when there are BRANDS connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedBrandNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {name: "dummy"}} as unknown as CompanyHasBrandRelationship,
            {id: 3, name: "dummy 3", partner_node: {name: "dummy"}} as unknown as CompanyHasBrandRelationship,
        ])

        expect(await findConnectedBrands(1))
            .toHaveLength(2)
    })
})
