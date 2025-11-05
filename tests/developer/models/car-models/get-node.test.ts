import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findNodeById} from "../../../../src/models/node-types/car-models/findNodeById"
import type {CarModelNode} from "../../../../src/data/node-types/car-models/types/CarModelNode"

describe('Collect node for the CAR MODEL detail page', () => {
    test('when the CAR MODEL does not exist', async () => {
        vi.spyOn(CarModelDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the CAR MODEL exists', async () => {
        const node = {id: 1, name: "dummy 1"} as CarModelNode
        vi.spyOn(CarModelDataFacade, 'getNodeById').mockResolvedValue(node)

        expect(await findNodeById(1))
            .toEqual(node)
    })
})
