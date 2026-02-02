import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/racing-events/findAllNodes"
import type {RacingEventNode} from "../../../../../src/data/node-types/racing-events/types/RacingEventNode"

describe('Collect node collection for the RACING EVENT overview page', () => {
    test('when there exist no RACING EVENTS', async () => {
        vi.spyOn(RacingEventDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACING EVENTS', async () => {
        vi.spyOn(RacingEventDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as RacingEventNode,
            {id: 2, name: "dummy 2"} as RacingEventNode,
            {id: 3, name: "dummy 3"} as RacingEventNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACING EVENTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as RacingEventNode)
        }

        vi.spyOn(RacingEventDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
