import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMotorShow} from "../../../../_toolbox/fixtures/node-types/FakeMotorShow"
import {MotorShowModelFacade} from "../../../../../src/models/MotorShowModelFacade"
import * as node from "../../../../../src/controllers/node-types/motor-shows/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a MOTOR SHOW detail page', () => {
    test('when the MOTOR SHOW does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/motor-show-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the MOTOR SHOW exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeMotorShow.model))
        vi.spyOn(MotorShowModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeMotorShow.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/motor-show-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
