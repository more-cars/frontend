import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-sessions/findNodeById"
import type {RacingSessionNode} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionNode"

describe('Collect node for the RACING SESSION detail page', () => {
    test('when the RACING SESSION does not exist', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the RACING SESSION exists', async () => {
        const node = {id: 1, name: "dummy 1"} as RacingSessionNode
        vi.spyOn(RacingSessionDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingSession = await findNodeById(1)

        expect(racingSession?.id).toEqual(node.id)
        expect(racingSession?.name).toEqual(node.name)
    })
})
