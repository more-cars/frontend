import {describe, expect, test, vi} from "vitest"
import {BookDataFacade} from "../../../../../src/data/BookDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/books/findConnectedCarModelVariants"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {BookCoversCarModelVariantRelationship} from "../../../../../src/data/node-types/books/types/BookCoversCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANTS for the BOOK detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(BookDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(BookDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModelVariant.data} as unknown as BookCoversCarModelVariantRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModelVariant.data} as unknown as BookCoversCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(2)
    })
})
