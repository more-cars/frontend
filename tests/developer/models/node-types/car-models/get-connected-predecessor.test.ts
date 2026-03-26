import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/car-models/findConnectedPredecessor"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {CarModelIsSuccessorOfRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelIsSuccessorOfRelationship"

describe('Collect connected predecessor for the CAR MODEL detail page', () => {
    test('when no predecessor CAR MODEL is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedPredecessorCarModelNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(12345678))
            .toEqual(null)
    })

    test('when there is a predecessor CAR MODEL connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModel.data} as unknown as CarModelIsSuccessorOfRelationship

        vi.spyOn(CarModelDataFacade, 'getConnectedPredecessorCarModelNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
