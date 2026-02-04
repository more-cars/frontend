import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/session-results/findAllNodes"
import type {SessionResultNode} from "../../../../../src/data/node-types/session-results/types/SessionResultNode"

describe('Collect node collection for the SESSION RESULT overview page', () => {
    test('when there exist no SESSION RESULTS', async () => {
        vi.spyOn(SessionResultDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple SESSION RESULTS', async () => {
        vi.spyOn(SessionResultDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, position: 1} as SessionResultNode,
            {id: 2, position: 2} as SessionResultNode,
            {id: 3, position: 3} as SessionResultNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 SESSION RESULTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, position: i} as SessionResultNode)
        }

        vi.spyOn(SessionResultDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
