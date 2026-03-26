import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"
import {ProgrammeEpisodeModelFacade} from "../../../../../src/models/ProgrammeEpisodeModelFacade"
import * as node from "../../../../../src/controllers/node-types/programme-episodes/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a PROGRAMME EPISODE detail page', () => {
    test('when the PROGRAMME EPISODE does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/programme-episode-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the PROGRAMME EPISODE exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeProgrammeEpisode.model))
        vi.spyOn(ProgrammeEpisodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeProgrammeEpisode.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/programme-episode-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
