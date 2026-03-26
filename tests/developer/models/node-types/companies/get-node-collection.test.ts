import {describe, expect, test, vi} from "vitest"
import {CompanyDataFacade} from "../../../../../src/data/CompanyDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/companies/findAllNodes"
import type {CompanyNode} from "../../../../../src/data/node-types/companies/types/CompanyNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the COMPANY overview page', () => {
    test('when there exist no COMPANIES', async () => {
        vi.spyOn(CompanyDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple COMPANIES', async () => {
        vi.spyOn(CompanyDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.COMPANY, data: {id: 11111118, name: "dummy 1"}} as CompanyNode,
            {type: DataNodeType.COMPANY, data: {id: 12222228, name: "dummy 2"}} as CompanyNode,
            {type: DataNodeType.COMPANY, data: {id: 13333338, name: "dummy 3"}} as CompanyNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 COMPANIES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.COMPANY, data: {id: i, name: "dummy " + i}} as CompanyNode)
        }

        vi.spyOn(CompanyDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
