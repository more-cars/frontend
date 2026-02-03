import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/racing-sessions/findAllNodes"
import type {RacingSessionNode} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionNode"

describe('Collect node collection for the RACING SESSION overview page', () => {
    test('when there exist no RACING SESSIONS', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACING SESSIONS', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as RacingSessionNode,
            {id: 2, name: "dummy 2"} as RacingSessionNode,
            {id: 3, name: "dummy 3"} as RacingSessionNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACING SESSIONS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as RacingSessionNode)
        }

        vi.spyOn(RacingSessionDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
