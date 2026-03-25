import {afterEach, describe, expect, test, vi} from "vitest"
import {MagazineControllerFacade} from "../../../../../src/controllers/MagazineControllerFacade"
import {MagazineModelFacade} from "../../../../../src/models/MagazineModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import type {Magazine} from "../../../../../src/models/node-types/magazines/types/Magazine"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MAGAZINE overview page', () => {
    test('when there exist no MAGAZINES', async () => {
        const spy = vi.spyOn(MagazineControllerFacade, 'showAllNodes')

        vi.spyOn(MagazineModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/magazines')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple MAGAZINES', async () => {
        const spy = vi.spyOn(MagazineControllerFacade, 'showAllNodes')

        vi.spyOn(MagazineModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeMagazine.model,
                FakeMagazine.model,
                FakeMagazine.model,
            ] satisfies Magazine[])

        const response = await supertestGet('/magazines')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
