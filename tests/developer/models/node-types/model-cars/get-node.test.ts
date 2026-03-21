import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/model-cars/findNodeById"
import type {ModelCarNode} from "../../../../../src/data/node-types/model-cars/types/ModelCarNode"

describe('Collect node for the MODEL CAR detail page', () => {
    test('when the MODEL CAR does not exist', async () => {
        vi.spyOn(ModelCarDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the MODEL CAR exists', async () => {
        const node = {id: 1, name: "dummy 1"} as ModelCarNode
        vi.spyOn(ModelCarDataFacade, 'getNodeById').mockResolvedValue(node)

        const modelCar = await findNodeById(1)

        expect(modelCar?.id).toEqual(node.id)
        expect(modelCar?.name).toEqual(node.name)
    })
})
