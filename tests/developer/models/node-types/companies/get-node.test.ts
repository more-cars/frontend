import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/companies/findNodeById"
import type {CompanyNode} from "../../../../../src/data/node-types/companies/types/CompanyNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the COMPANY detail page', () => {
    test('when the COMPANY does not exist', async () => {
        vi.spyOn(CompanyDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the COMPANY exists', async () => {
        const node = {type: DataNodeType.COMPANY, data: {id: 11111118, name: "dummy 1"}} as CompanyNode
        vi.spyOn(CompanyDataFacade, 'getNodeById').mockResolvedValue(node)

        const company = await findNodeById(11111118)

        expect(company?.fields.id).toEqual(node.data.id)
        expect(company?.fields.name).toEqual(node.data.name)
    })
})
