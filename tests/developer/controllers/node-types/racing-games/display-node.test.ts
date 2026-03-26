import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingGame} from "../../../../_toolbox/fixtures/node-types/FakeRacingGame"
import {RacingGameModelFacade} from "../../../../../src/models/RacingGameModelFacade"
import * as node from "../../../../../src/controllers/node-types/racing-games/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a RACING GAME detail page', () => {
    test('when the RACING GAME does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/racing-games-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the RACING GAME exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingGame.model))
        vi.spyOn(RacingGameModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingGame.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/racing-game-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
