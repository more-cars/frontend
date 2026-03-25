import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Brand} from "../../../../src/models/node-types/brands/types/Brand"

export const FakeBrand = {
    model: {
        type: ModelNodeType.BRAND,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.vehicle.manufacturer(),
            full_name: faker.vehicle.manufacturer(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            wmi: faker.vehicle.vrm(),
            hsn: faker.vehicle.vrm(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Brand,
}
