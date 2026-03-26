import {afterEach, describe, expect, test, vi} from "vitest"
import {RacingSeriesControllerFacade} from "../../../../../src/controllers/RacingSeriesControllerFacade"
import {RacingSeriesModelFacade} from "../../../../../src/models/RacingSeriesModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingSeries} from "../../../../_toolbox/fixtures/node-types/FakeRacingSeries"
import type {RacingSeries} from "../../../../../src/models/node-types/racing-series/types/RacingSeries"

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

        const response = await supertestGet('/racing-series')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
