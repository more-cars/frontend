import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findConnectedCompany} from "../../../../../src/models/node-types/brands/findConnectedCompany"
import {BrandBelongsToCompanyRelationship} from "../../../../../src/data/node-types/brands/types/BrandBelongsToCompanyRelationship"

describe('Collect connected COMPANY for the BRAND detail page', () => {
    test('when no COMPANY is connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCompanyNode').mockResolvedValue(null)

        expect(await findConnectedCompany(1))
            .toEqual(null)
    })

    test('when there is a COMPANY connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as BrandBelongsToCompanyRelationship
        vi.spyOn(BrandDataFacade, 'getConnectedCompanyNode').mockResolvedValue(data)

        expect(await findConnectedCompany(1))
            .toHaveProperty('id', 1)
    })
})
