import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/programmes/findAllNodes"
import type {ProgrammeNode} from "../../../../../src/data/node-types/programmes/types/ProgrammeNode"

describe('Collect node collection for the PROGRAMME overview page', () => {
    test('when there exist no PROGRAMMES', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple PROGRAMMES', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as ProgrammeNode,
            {id: 2, name: "dummy 2"} as ProgrammeNode,
            {id: 3, name: "dummy 3"} as ProgrammeNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 PROGRAMMES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as ProgrammeNode)
        }

        vi.spyOn(ProgrammeDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
