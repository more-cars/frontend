import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-games/findNodeById"
import type {RacingGameNode} from "../../../../../src/data/node-types/racing-games/types/RacingGameNode"

describe('Collect node for the RACING GAME detail page', () => {
    test('when the RACING GAME does not exist', async () => {
        vi.spyOn(RacingGameDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the RACING GAME exists', async () => {
        const node = {id: 1, name: "dummy 1"} as RacingGameNode
        vi.spyOn(RacingGameDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingGame = await findNodeById(1)

        expect(racingGame?.id).toEqual(node.id)
        expect(racingGame?.name).toEqual(node.name)
    })
})
