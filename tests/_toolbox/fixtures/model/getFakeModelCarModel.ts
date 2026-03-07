import {faker} from "@faker-js/faker"
import type {CarModel} from "../../../../src/models/node-types/car-models/types/CarModel"

export function getFakeModelCarModel() {
    return {
        id: faker.number.int({min: 12_000_000, max: 20_000_000}),
        name: faker.vehicle.model(),
        built_from: faker.number.int({min: 1000, max: 3000}),
        built_to: faker.number.int({min: 1000, max: 3000}),
        generation: faker.number.int({min: 1, max: 10}),
        internal_code: faker.vehicle.vrm(),
        total_production: faker.number.int({min: 100, max: 10000000}),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.past().toISOString(),
    } satisfies CarModel
}

