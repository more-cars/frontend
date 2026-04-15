import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Brand} from "../../../../src/models/node-types/brands/types/Brand"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {BrandNode} from "../../../../src/data/node-types/brands/types/BrandNode"

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
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Brand,

    data: {
        type: DataNodeType.BRAND,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.vehicle.manufacturer(),
            full_name: faker.vehicle.manufacturer(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            wmi: faker.vehicle.vrm(),
            hsn: faker.vehicle.vrm(),
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies BrandNode,
}
