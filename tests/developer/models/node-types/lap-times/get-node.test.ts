import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/lap-times/findNodeById"
import type {LapTimeNode} from "../../../../../src/data/node-types/lap-times/types/LapTimeNode"

describe('Collect node for the LAP TIME detail page', () => {
    test('when the LAP TIME does not exist', async () => {
        vi.spyOn(LapTimeDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the LAP TIME exists', async () => {
        const node = {id: 1, driver_name: "dummy 1"} as LapTimeNode
        vi.spyOn(LapTimeDataFacade, 'getNodeById').mockResolvedValue(node)

        const lapTime = await findNodeById(1)

        expect(lapTime?.id).toEqual(node.id)
        expect(lapTime?.driver_name).toEqual(node.driver_name)
    })
})
