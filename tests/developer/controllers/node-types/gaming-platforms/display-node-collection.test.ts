import {afterEach, describe, expect, test, vi} from "vitest"
import {GamingPlatformControllerFacade} from "../../../../../src/controllers/GamingPlatformControllerFacade"
import {GamingPlatformModelFacade} from "../../../../../src/models/GamingPlatformModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeGamingPlatform} from "../../../../_toolbox/fixtures/node-types/FakeGamingPlatform"
import type {GamingPlatform} from "../../../../../src/models/node-types/gaming-platforms/types/GamingPlatform"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the GAMING PLATFORM overview page', () => {
    test('when there exist no GAMING PLATFORMS', async () => {
        const spy = vi.spyOn(GamingPlatformControllerFacade, 'showAllNodes')

        vi.spyOn(GamingPlatformModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/gaming-platforms')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple GAMING PLATFORMS', async () => {
        const spy = vi.spyOn(GamingPlatformControllerFacade, 'showAllNodes')

        vi.spyOn(GamingPlatformModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeGamingPlatform.model,
                FakeGamingPlatform.model,
                FakeGamingPlatform.model,
            ] satisfies GamingPlatform[])

        const response = await supertestGet('/gaming-platforms')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
