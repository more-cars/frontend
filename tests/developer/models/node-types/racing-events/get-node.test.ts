import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/racing-events/findNodeById"
import type {RacingEventNode} from "../../../../../src/data/node-types/racing-events/types/RacingEventNode"

describe('Collect node for the RACING EVENT detail page', () => {
    test('when the RACING EVENT does not exist', async () => {
        vi.spyOn(RacingEventDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the RACING EVENT exists', async () => {
        const node = {id: 1, name: "dummy 1"} as RacingEventNode
        vi.spyOn(RacingEventDataFacade, 'getNodeById').mockResolvedValue(node)

        const racingEvent = await findNodeById(1)

        expect(racingEvent?.id).toEqual(node.id)
        expect(racingEvent?.name).toEqual(node.name)
    })
})
