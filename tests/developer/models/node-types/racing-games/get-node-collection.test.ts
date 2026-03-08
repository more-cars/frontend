import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/racing-games/findAllNodes"
import type {RacingGameNode} from "../../../../../src/data/node-types/racing-games/types/RacingGameNode"

describe('Collect node collection for the RACING GAME overview page', () => {
    test('when there exist no RACING GAMES', async () => {
        vi.spyOn(RacingGameDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACING GAMES', async () => {
        vi.spyOn(RacingGameDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as RacingGameNode,
            {id: 2, name: "dummy 2"} as RacingGameNode,
            {id: 3, name: "dummy 3"} as RacingGameNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACING GAMES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as RacingGameNode)
        }

        vi.spyOn(RacingGameDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
