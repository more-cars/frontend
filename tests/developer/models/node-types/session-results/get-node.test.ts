import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/session-results/findNodeById"
import type {SessionResultNode} from "../../../../../src/data/node-types/session-results/types/SessionResultNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the SESSION RESULT detail page', () => {
    test('when the SESSION RESULT does not exist', async () => {
        vi.spyOn(SessionResultDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the SESSION RESULT exists', async () => {
        const node = {type: DataNodeType.SESSION_RESULT, data: {id: 1, position: 1}} as SessionResultNode
        vi.spyOn(SessionResultDataFacade, 'getNodeById').mockResolvedValue(node)

        const sessionResult = await findNodeById(1)

        expect(sessionResult?.fields.id).toEqual(node.data.id)
        expect(sessionResult?.fields.position).toEqual(node.data.position)
    })
})
