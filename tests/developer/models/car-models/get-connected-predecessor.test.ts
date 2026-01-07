import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findConnectedPredecessor} from "../../../../src/models/node-types/car-models/findConnectedPredecessor"
import {
    CarModelIsSuccessorOfRelationship
} from "../../../../src/data/node-types/car-models/types/CarModelIsSuccessorOfRelationship"

describe('Collect connected predecessor for the CAR MODEL detail page', () => {
    test.skip('when no predecessor CAR MODEL is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedPredecessorCarModelNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a predecessor CAR MODEL connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as CarModelIsSuccessorOfRelationship
        vi.spyOn(CarModelDataFacade, 'getConnectedPredecessorCarModelNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(1))
            .toHaveProperty('id', 1)
    })
})
