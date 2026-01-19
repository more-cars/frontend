import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/companies/findNodeById"
import type {CompanyNode} from "../../../../../src/data/node-types/companies/types/CompanyNode"

describe('Collect node for the COMPANY detail page', () => {
    test('when the COMPANY does not exist', async () => {
        vi.spyOn(CompanyDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the COMPANY exists', async () => {
        const node = {id: 1, name: "dummy 1"} as CompanyNode
        vi.spyOn(CompanyDataFacade, 'getNodeById').mockResolvedValue(node)

        const company = await findNodeById(1)

        expect(company?.id).toEqual(node.id)
        expect(company?.name).toEqual(node.name)
    })
})
