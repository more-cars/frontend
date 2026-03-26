import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/programmes/findAllNodes"
import type {ProgrammeNode} from "../../../../../src/data/node-types/programmes/types/ProgrammeNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the PROGRAMME overview page', () => {
    test('when there exist no PROGRAMMES', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple PROGRAMMES', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.PROGRAMME, data: {id: 11111118, name: "dummy 1"}} as ProgrammeNode,
            {type: DataNodeType.PROGRAMME, data: {id: 12222228, name: "dummy 2"}} as ProgrammeNode,
            {type: DataNodeType.PROGRAMME, data: {id: 13333338, name: "dummy 3"}} as ProgrammeNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 PROGRAMMES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.PROGRAMME, data: {id: i, name: "dummy " + i}} as ProgrammeNode)
        }

        vi.spyOn(ProgrammeDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
