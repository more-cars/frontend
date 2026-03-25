import {afterEach, describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeControllerFacade} from "../../../../../src/controllers/ProgrammeEpisodeControllerFacade"
import {ProgrammeEpisodeModelFacade} from "../../../../../src/models/ProgrammeEpisodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"
import type {ProgrammeEpisode} from "../../../../../src/models/node-types/programme-episodes/types/ProgrammeEpisode"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the PROGRAMME EPISODE overview page', () => {
    test('when there exist no PROGRAMME EPISODES', async () => {
        const spy = vi.spyOn(ProgrammeEpisodeControllerFacade, 'showAllNodes')

        vi.spyOn(ProgrammeEpisodeModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/programme-episodes')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple PROGRAMME EPISODES', async () => {
        const spy = vi.spyOn(ProgrammeEpisodeControllerFacade, 'showAllNodes')

        vi.spyOn(ProgrammeEpisodeModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeProgrammeEpisode.model,
                FakeProgrammeEpisode.model,
                FakeProgrammeEpisode.model,
            ] satisfies ProgrammeEpisode[])

        const response = await supertestGet('/programme-episodes')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
