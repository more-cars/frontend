import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findConnectedModelCars} from "../../../../../src/models/node-types/model-car-brands/findConnectedModelCars"
import {ModelCarBrandCreatedModelCarRelationship} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandCreatedModelCarRelationship"

describe('Collect connected MODEL CARS for the MODEL CAR BRAND detail page', () => {
    test('when no MODEL CARS are connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedModelCarNodes').mockResolvedValue([])

        expect(await findConnectedModelCars(1))
            .toHaveLength(0)
    })

    test('when there are MODEL CARS connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedModelCarNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ModelCarBrandCreatedModelCarRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ModelCarBrandCreatedModelCarRelationship,
        ])

        expect(await findConnectedModelCars(1))
            .toHaveLength(2)
    })
})
