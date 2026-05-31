import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedBooks} from "../../../../../src/models/node-types/car-model-variants/findConnectedBooks"
import {FakeBook} from "../../../../_toolbox/fixtures/node-types/FakeBook"
import {CarModelVariantIsCoveredByBookRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsCoveredByBookRelationship"

describe('Collect connected BOOKS for the CAR MODEL VARIANT detail page', () => {
    test('when no BOOKS are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedBookNodes').mockResolvedValue([])

        expect(await findConnectedBooks(12345678))
            .toHaveLength(0)
    })

    test('when there are BOOKS connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedBookNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeBook.data} as unknown as CarModelVariantIsCoveredByBookRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeBook.data} as unknown as CarModelVariantIsCoveredByBookRelationship,
        ])

        expect(await findConnectedBooks(12345678))
            .toHaveLength(2)
    })
})
