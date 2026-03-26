import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-games/findNodeById"
import type {RacingGameNode} from "../../../../../src/data/node-types/racing-games/types/RacingGameNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the RACING GAME detail page', () => {
    test('when the RACING GAME does not exist', async () => {
        vi.spyOn(RacingGameDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the RACING GAME exists', async () => {
        const node = {type: DataNodeType.RACING_GAME, data: {id: 11111118, name: "dummy 1"}} as RacingGameNode
        vi.spyOn(RacingGameDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingGame = await findNodeById(11111118)

        expect(racingGame?.fields.id).toEqual(node.data.id)
        expect(racingGame?.fields.name).toEqual(node.data.name)
    })
})
