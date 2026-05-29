import {afterEach, describe, expect, test, vi} from "vitest"
import {RacingEventControllerFacade} from "../../../../../src/controllers/RacingEventControllerFacade"
import {RacingEventModelFacade} from "../../../../../src/models/RacingEventModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import type {RacingEvent} from "../../../../../src/models/node-types/racing-events/types/RacingEvent"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the RACING EVENT overview page', () => {
    test('when there exist no RACING EVENTS', async () => {
        const spy = vi.spyOn(RacingEventControllerFacade, 'showAllNodes')

        vi.spyOn(RacingEventModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/racing-events')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple RACING EVENTS', async () => {
        const spy = vi.spyOn(RacingEventControllerFacade, 'showAllNodes')

        vi.spyOn(RacingEventModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeRacingEvent.model,
                FakeRacingEvent.model,
                FakeRacingEvent.model,
            ] satisfies RacingEvent[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/racing-events')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
