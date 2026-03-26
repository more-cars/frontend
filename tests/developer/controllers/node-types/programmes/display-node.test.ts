import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeProgramme} from "../../../../_toolbox/fixtures/node-types/FakeProgramme"
import {ProgrammeModelFacade} from "../../../../../src/models/ProgrammeModelFacade"
import * as node from "../../../../../src/controllers/node-types/programmes/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a PROGRAMME detail page', () => {
    test('when the PROGRAMME does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/programme-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the PROGRAMME exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeProgramme.model))
        vi.spyOn(ProgrammeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeProgramme.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/programme-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
