import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findNodeById} from "../../../../src/models/car-models/findNodeById"

describe('Collect node for the CAR MODEL detail page', () => {
    test('when the CAR MODEL does not exist', async () => {
        vi.spyOn(CarModelDataFacade, 'getNodeById').mockResolvedValue(false)

        expect(await findNodeById(1))
            .toEqual(false)
    })

    test('when the CAR MODEL exists', async () => {
        const node = {id: 1, name: "dummy 1"}
        vi.spyOn(CarModelDataFacade, 'getNodeById').mockResolvedValue(node)

        expect(await findNodeById(1))
            .toEqual(node)
    })
})
