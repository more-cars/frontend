import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/companies/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {CompanyHasMainImageRelationship} from "../../../../../src/data/node-types/companies/types/CompanyHasMainImageRelationship"

describe('Collect connected main IMAGE for the COMPANY detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as CompanyHasMainImageRelationship

        vi.spyOn(CompanyDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
