import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/motor-shows/findNodeById"
import type {MotorShowNode} from "../../../../../src/data/node-types/motor-shows/types/MotorShowNode"

describe('Collect node for the MOTOR SHOW detail page', () => {
    test('when the MOTOR SHOW does not exist', async () => {
        vi.spyOn(MotorShowDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the MOTOR SHOW exists', async () => {
        const node = {id: 1, name: "dummy 1"} as MotorShowNode
        vi.spyOn(MotorShowDataFacade, 'getNodeById').mockResolvedValue(node)

        const motorShow = await findNodeById(1)

        expect(motorShow?.id).toEqual(node.id)
        expect(motorShow?.name).toEqual(node.name)
    })
})
