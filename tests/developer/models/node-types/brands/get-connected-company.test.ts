import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findConnectedCompany} from "../../../../../src/models/node-types/brands/findConnectedCompany"
import {FakeCompany} from "../../../../_toolbox/fixtures/node-types/FakeCompany"
import {BrandBelongsToCompanyRelationship} from "../../../../../src/data/node-types/brands/types/BrandBelongsToCompanyRelationship"

describe('Collect connected COMPANY for the BRAND detail page', () => {
    test('when no COMPANY is connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCompanyNode').mockResolvedValue(null)

        expect(await findConnectedCompany(12345678))
            .toEqual(null)
    })

    test('when there is a COMPANY connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCompany.data} as unknown as BrandBelongsToCompanyRelationship

        vi.spyOn(BrandDataFacade, 'getConnectedCompanyNode').mockResolvedValue(data)

        expect(await findConnectedCompany(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
