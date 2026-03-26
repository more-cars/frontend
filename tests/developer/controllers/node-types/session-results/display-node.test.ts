import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeSessionResult} from "../../../../_toolbox/fixtures/node-types/FakeSessionResult"
import {SessionResultModelFacade} from "../../../../../src/models/SessionResultModelFacade"
import * as node from "../../../../../src/controllers/node-types/session-results/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a SESSION RESULT detail page', () => {
    test('when the SESSION RESULT does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/session-result-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the SESSION RESULT exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeSessionResult.model))
        vi.spyOn(SessionResultModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeSessionResult.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/session-result-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
