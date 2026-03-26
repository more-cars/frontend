import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/session-results/findAllNodes"
import type {SessionResultNode} from "../../../../../src/data/node-types/session-results/types/SessionResultNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the SESSION RESULT overview page', () => {
    test('when there exist no SESSION RESULTS', async () => {
        vi.spyOn(SessionResultDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple SESSION RESULTS', async () => {
        vi.spyOn(SessionResultDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.SESSION_RESULT, data: {id: 11111118, position: 1}} as SessionResultNode,
            {type: DataNodeType.SESSION_RESULT, data: {id: 12222228, position: 2}} as SessionResultNode,
            {type: DataNodeType.SESSION_RESULT, data: {id: 13333338, position: 3}} as SessionResultNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 SESSION RESULTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.SESSION_RESULT, data: {id: i, position: i}} as SessionResultNode)
        }

        vi.spyOn(SessionResultDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
