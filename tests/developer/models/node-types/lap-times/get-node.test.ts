import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/lap-times/findNodeById"
import type {LapTimeNode} from "../../../../../src/data/node-types/lap-times/types/LapTimeNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the LAP TIME detail page', () => {
    test('when the LAP TIME does not exist', async () => {
        vi.spyOn(LapTimeDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the LAP TIME exists', async () => {
        const node = {type: DataNodeType.LAP_TIME, data: {id: 1, driver_name: "dummy 1"}} as LapTimeNode
        vi.spyOn(LapTimeDataFacade, 'getNodeById').mockResolvedValue(node)

        const lapTime = await findNodeById(1)

        expect(lapTime?.fields.id).toEqual(node.data.id)
        expect(lapTime?.fields.driver_name).toEqual(node.data.driver_name)
    })
})
