import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findConnectedBrand} from "../../../../src/models/car-models/findConnectedBrand"

describe('Collect connected BRAND for the CAR MODEL detail page', () => {
    test('when no BRAND is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedBrandNode').mockResolvedValue(false)

        expect(await findConnectedBrand(1))
            .toEqual(false)
    })

    test('when there is a BRAND connected', async () => {
        const data = {
            data: {
                relationship_id: 2,
                relationship_name: "dummy 1",
                relationship_partner: {
                    node_type: 'brand',
                },
            }
        }
        vi.spyOn(CarModelDataFacade, 'getConnectedBrandNode').mockResolvedValue(data)

        expect(await findConnectedBrand(1))
            .toHaveProperty('node_type', 'brand')
    })
})
