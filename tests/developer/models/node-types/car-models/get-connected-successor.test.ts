import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/car-models/findConnectedSuccessor"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {CarModelHasSuccessorRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelHasSuccessorRelationship"

describe('Collect connected successor for the CAR MODEL detail page', () => {
    test('when no successor CAR MODEL is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedSuccessorCarModelNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a successor CAR MODEL connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModel.data} as unknown as CarModelHasSuccessorRelationship

        vi.spyOn(CarModelDataFacade, 'getConnectedSuccessorCarModelNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
