import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-sessions/findNodeById"
import type {RacingSessionNode} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the RACING SESSION detail page', () => {
    test('when the RACING SESSION does not exist', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the RACING SESSION exists', async () => {
        const node = {type: DataNodeType.RACING_SESSION, data: {id: 11111118, name: "dummy 1"}} as RacingSessionNode
        vi.spyOn(RacingSessionDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingSession = await findNodeById(11111118)

        expect(racingSession?.fields.id).toEqual(node.data.id)
        expect(racingSession?.fields.name).toEqual(node.data.name)
    })
})
