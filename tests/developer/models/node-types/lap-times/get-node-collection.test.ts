import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/lap-times/findAllNodes"
import type {LapTimeNode} from "../../../../../src/data/node-types/lap-times/types/LapTimeNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the LAP TIME overview page', () => {
    test('when there exist no LAP TIMES', async () => {
        vi.spyOn(LapTimeDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple LAP TIMES', async () => {
        vi.spyOn(LapTimeDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.LAP_TIME, data: {id: 11111118, driver_name: "dummy 1"}} as LapTimeNode,
            {type: DataNodeType.LAP_TIME, data: {id: 12222228, driver_name: "dummy 2"}} as LapTimeNode,
            {type: DataNodeType.LAP_TIME, data: {id: 13333338, driver_name: "dummy 3"}} as LapTimeNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 LAP TIMES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.LAP_TIME, data: {id: i, driver_name: "dummy " + i}} as LapTimeNode)
        }

        vi.spyOn(LapTimeDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
