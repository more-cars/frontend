import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/motor-shows/findAllNodes"
import type {MotorShowNode} from "../../../../../src/data/node-types/motor-shows/types/MotorShowNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the MOTOR SHOW overview page', () => {
    test('when there exist no MOTOR SHOWS', async () => {
        vi.spyOn(MotorShowDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple MOTOR SHOWS', async () => {
        vi.spyOn(MotorShowDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.MOTOR_SHOW, data: {id: 1, name: "dummy 1"}} as MotorShowNode,
            {type: DataNodeType.MOTOR_SHOW, data: {id: 2, name: "dummy 2"}} as MotorShowNode,
            {type: DataNodeType.MOTOR_SHOW, data: {id: 3, name: "dummy 3"}} as MotorShowNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 MOTOR SHOWS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.MOTOR_SHOW, data: {id: i, name: "dummy " + i}} as MotorShowNode)
        }

        vi.spyOn(MotorShowDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
