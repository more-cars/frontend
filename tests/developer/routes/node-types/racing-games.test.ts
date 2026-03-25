import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/racing-games/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/racing-games/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {RacingGame} from "../../../../src/models/node-types/racing-games/types/RacingGame"

describe('Racing Games', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/racing-games')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.RACING_GAME,
                fields: {},
            } as RacingGame))

        await supertestGet('/racing-game-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
