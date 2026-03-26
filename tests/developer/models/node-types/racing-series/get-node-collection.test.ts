import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/racing-series/findAllNodes"
import type {RacingSeriesNode} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the RACING SERIES overview page', () => {
    test('when there exist no RACING SERIES', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RACING SERIES', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.RACING_SERIES, data: {id: 11111118, name: "dummy 1"}} as RacingSeriesNode,
            {type: DataNodeType.RACING_SERIES, data: {id: 12222228, name: "dummy 2"}} as RacingSeriesNode,
            {type: DataNodeType.RACING_SERIES, data: {id: 13333338, name: "dummy 3"}} as RacingSeriesNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RACING SERIES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.RACING_SERIES, data: {id: i, name: "dummy " + i}} as RacingSeriesNode)
        }

        vi.spyOn(RacingSeriesDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
