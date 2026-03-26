import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/model-cars/findNodeById"
import type {ModelCarNode} from "../../../../../src/data/node-types/model-cars/types/ModelCarNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the MODEL CAR detail page', () => {
    test('when the MODEL CAR does not exist', async () => {
        vi.spyOn(ModelCarDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the MODEL CAR exists', async () => {
        const node = {type: DataNodeType.MODEL_CAR, data: {id: 11111118, name: "dummy 1"}} as ModelCarNode
        vi.spyOn(ModelCarDataFacade, 'getNodeById').mockResolvedValue(node)

        const modelCar = await findNodeById(11111118)

        expect(modelCar?.fields.id).toEqual(node.data.id)
        expect(modelCar?.fields.name).toEqual(node.data.name)
    })
})
