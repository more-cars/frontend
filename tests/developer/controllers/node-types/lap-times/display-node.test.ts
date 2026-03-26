import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeLapTime} from "../../../../_toolbox/fixtures/node-types/FakeLapTime"
import {LapTimeModelFacade} from "../../../../../src/models/LapTimeModelFacade"
import * as node from "../../../../../src/controllers/node-types/lap-times/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a LAP TIME detail page', () => {
    test('when the LAP TIME does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/lap-time-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the LAP TIME exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeLapTime.model))
        vi.spyOn(LapTimeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeLapTime.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/lap-time-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
