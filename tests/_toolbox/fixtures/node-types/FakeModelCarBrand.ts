import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {ModelCarBrand} from "../../../../src/models/node-types/model-car-brands/types/ModelCarBrand"

export const FakeModelCarBrand = {
    model: {
        type: ModelNodeType.MODEL_CAR_BRAND,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.noun(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies ModelCarBrand,
}
