import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/companies/findConnectedMainImage"
import {CompanyHasMainImageRelationship} from "../../../../../src/data/node-types/companies/types/CompanyHasMainImageRelationship"

describe('Collect connected main IMAGE for the COMPANY detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as CompanyHasMainImageRelationship
        vi.spyOn(CompanyDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
