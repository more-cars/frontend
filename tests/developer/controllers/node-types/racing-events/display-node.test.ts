import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {RacingEventModelFacade} from "../../../../../src/models/RacingEventModelFacade"
import * as node from "../../../../../src/controllers/node-types/racing-events/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a RACING EVENT detail page', () => {
    test('when the RACING EVENT does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/racing-event-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the RACING EVENT exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingEvent.model))
        vi.spyOn(RacingEventModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingEvent.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/racing-event-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
