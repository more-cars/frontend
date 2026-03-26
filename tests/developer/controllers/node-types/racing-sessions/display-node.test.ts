import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingSession} from "../../../../_toolbox/fixtures/node-types/FakeRacingSession"
import {RacingSessionModelFacade} from "../../../../../src/models/RacingSessionModelFacade"
import * as node from "../../../../../src/controllers/node-types/racing-sessions/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a RACING SESSION detail page', () => {
    test('when the RACING SESSION does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/racing-session-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the RACING SESSION exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingSession.model))
        vi.spyOn(RacingSessionModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingSession.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/racing-session-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
