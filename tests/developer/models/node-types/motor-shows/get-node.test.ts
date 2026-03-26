import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/motor-shows/findNodeById"
import type {MotorShowNode} from "../../../../../src/data/node-types/motor-shows/types/MotorShowNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the MOTOR SHOW detail page', () => {
    test('when the MOTOR SHOW does not exist', async () => {
        vi.spyOn(MotorShowDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the MOTOR SHOW exists', async () => {
        const node = {type: DataNodeType.MOTOR_SHOW, data: {id: 11111118, name: "dummy 1"}} as MotorShowNode
        vi.spyOn(MotorShowDataFacade, 'getNodeById').mockResolvedValue(node)

        const motorShow = await findNodeById(11111118)

        expect(motorShow?.fields.id).toEqual(node.data.id)
        expect(motorShow?.fields.name).toEqual(node.data.name)
    })
})
