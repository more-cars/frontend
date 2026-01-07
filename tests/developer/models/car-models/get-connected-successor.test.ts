import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findConnectedSuccessor} from "../../../../src/models/node-types/car-models/findConnectedSuccessor"
import {
    CarModelHasSuccessorRelationship
} from "../../../../src/data/node-types/car-models/types/CarModelHasSuccessorRelationship"

describe('Collect connected successor for the CAR MODEL detail page', () => {
    test('when no successor CAR MODEL is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedSuccessorCarModelNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(1))
            .toEqual(null)
    })

    test('when there is a successor CAR MODEL connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as CarModelHasSuccessorRelationship
        vi.spyOn(CarModelDataFacade, 'getConnectedSuccessorCarModelNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(1))
            .toHaveProperty('id', 1)
    })
})
