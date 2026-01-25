import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/companies/findConnectedImages"
import {CompanyHasImageRelationship} from "../../../../../src/data/node-types/companies/types/CompanyHasImageRelationship"

describe('Collect connected IMAGES for the COMPANY detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(CompanyDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as CompanyHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as CompanyHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
