import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {CarModel} from "../../../../src/models/node-types/car-models/types/CarModel"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {CarModelNode} from "../../../../src/data/node-types/car-models/types/CarModelNode"

export const FakeCarModel = {
    model: {
        type: ModelNodeType.CAR_MODEL,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.vehicle.model(),
            built_from: faker.number.int({min: 1000, max: 3000}),
            built_to: faker.number.int({min: 1000, max: 3000}),
            generation: faker.number.int({min: 1, max: 10}),
            internal_code: faker.vehicle.vrm(),
            total_production: faker.number.int({min: 100, max: 10000000}),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies CarModel,

    data: {
        type: DataNodeType.CAR_MODEL,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.vehicle.model(),
            built_from: faker.number.int({min: 1000, max: 3000}),
            built_to: faker.number.int({min: 1000, max: 3000}),
            generation: faker.number.int({min: 1, max: 10}),
            internal_code: faker.vehicle.vrm(),
            total_production: faker.number.int({min: 100, max: 10000000}),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies CarModelNode,
}
