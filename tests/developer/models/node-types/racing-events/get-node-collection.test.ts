import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/racing-events/findAllNodes"
import type {RacingEventNode} from "../../../../../src/data/node-types/racing-events/types/RacingEventNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the RACING EVENT overview page', () => {
    test('when there exist no RACING EVENTS', async () => {
        vi.spyOn(RacingEventDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACING EVENTS', async () => {
        vi.spyOn(RacingEventDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.RACING_EVENT, data: {id: 11111118, name: "dummy 1"}} as RacingEventNode,
            {type: DataNodeType.RACING_EVENT, data: {id: 12222228, name: "dummy 2"}} as RacingEventNode,
            {type: DataNodeType.RACING_EVENT, data: {id: 13333338, name: "dummy 3"}} as RacingEventNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACING EVENTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.RACING_EVENT, data: {id: i, name: "dummy " + i}} as RacingEventNode)
        }

        vi.spyOn(RacingEventDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
