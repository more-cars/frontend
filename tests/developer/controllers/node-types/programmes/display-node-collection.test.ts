import {afterEach, describe, expect, test, vi} from "vitest"
import {ProgrammeControllerFacade} from "../../../../../src/controllers/ProgrammeControllerFacade"
import {ProgrammeModelFacade} from "../../../../../src/models/ProgrammeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeProgramme} from "../../../../_toolbox/fixtures/node-types/FakeProgramme"
import type {Programme} from "../../../../../src/models/node-types/programmes/types/Programme"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the PROGRAMME overview page', () => {
    test('when there exist no PROGRAMMES', async () => {
        const spy = vi.spyOn(ProgrammeControllerFacade, 'showAllNodes')

        vi.spyOn(ProgrammeModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/programmes')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple PROGRAMMES', async () => {
        const spy = vi.spyOn(ProgrammeControllerFacade, 'showAllNodes')

        vi.spyOn(ProgrammeModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeProgramme.model,
                FakeProgramme.model,
                FakeProgramme.model,
            ] satisfies Programme[])

        const response = await supertestGet('/programmes')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
