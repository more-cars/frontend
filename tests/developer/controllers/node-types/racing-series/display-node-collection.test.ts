import {afterEach, describe, expect, test, vi} from "vitest"
import {RacingSeriesControllerFacade} from "../../../../../src/controllers/RacingSeriesControllerFacade"
import {RacingSeriesModelFacade} from "../../../../../src/models/RacingSeriesModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingSeries} from "../../../../_toolbox/fixtures/node-types/FakeRacingSeries"
import type {RacingSeries} from "../../../../../src/models/node-types/racing-series/types/RacingSeries"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the RACING SERIES overview page', () => {
    test('when there exist no RACING SERIES', async () => {
        const spy = vi.spyOn(RacingSeriesControllerFacade, 'showAllNodes')

        vi.spyOn(RacingSeriesModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/racing-series')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple RACING SERIES', async () => {
        const spy = vi.spyOn(RacingSeriesControllerFacade, 'showAllNodes')

        vi.spyOn(RacingSeriesModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeRacingSeries.model,
                FakeRacingSeries.model,
                FakeRacingSeries.model,
            ] satisfies RacingSeries[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/racing-series')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when the search params are invalid', async () => {
        const response = await supertestGet('/racing-series?sort_direction=blubb')

        expect(response.statusCode)
            .toBe(400)
    })
})
