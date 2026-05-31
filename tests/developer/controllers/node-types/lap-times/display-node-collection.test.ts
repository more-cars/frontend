import {afterEach, describe, expect, test, vi} from "vitest"
import {LapTimeControllerFacade} from "../../../../../src/controllers/LapTimeControllerFacade"
import {LapTimeModelFacade} from "../../../../../src/models/LapTimeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeLapTime} from "../../../../_toolbox/fixtures/node-types/FakeLapTime"
import type {LapTime} from "../../../../../src/models/node-types/lap-times/types/LapTime"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the LAP TIME overview page', () => {
    test('when there exist no LAP TIMES', async () => {
        const spy = vi.spyOn(LapTimeControllerFacade, 'showAllNodes')

        vi.spyOn(LapTimeModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/lap-times')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when there exist multiple LAP TIMES', async () => {
        const spy = vi.spyOn(LapTimeControllerFacade, 'showAllNodes')

        vi.spyOn(LapTimeModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeLapTime.model,
                FakeLapTime.model,
                FakeLapTime.model,
            ] satisfies LapTime[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/lap-times')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when the search params are invalid', async () => {
        const response = await supertestGet('/lap-times?sort_direction=blubb')

        expect(response.statusCode)
            .toBe(400)
    })
})
