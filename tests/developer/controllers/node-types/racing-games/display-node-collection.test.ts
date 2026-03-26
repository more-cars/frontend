import {afterEach, describe, expect, test, vi} from "vitest"
import {RacingGameControllerFacade} from "../../../../../src/controllers/RacingGameControllerFacade"
import {RacingGameModelFacade} from "../../../../../src/models/RacingGameModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingGame} from "../../../../_toolbox/fixtures/node-types/FakeRacingGame"
import type {RacingGame} from "../../../../../src/models/node-types/racing-games/types/RacingGame"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the RACING GAME overview page', () => {
    test('when there exist no RACING GAMES', async () => {
        const spy = vi.spyOn(RacingGameControllerFacade, 'showAllNodes')

        vi.spyOn(RacingGameModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/racing-games')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple RACING GAMES', async () => {
        const spy = vi.spyOn(RacingGameControllerFacade, 'showAllNodes')

        vi.spyOn(RacingGameModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeRacingGame.model,
                FakeRacingGame.model,
                FakeRacingGame.model,
            ] satisfies RacingGame[])

        const response = await supertestGet('/racing-games')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
