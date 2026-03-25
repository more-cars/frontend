import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {GamingPlatform} from "../../../../src/models/node-types/gaming-platforms/types/GamingPlatform"

export const FakeGamingPlatform = {
    model: {
        type: ModelNodeType.GAMING_PLATFORM,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.commerce.product(),
            release_year: faker.number.int({min: 1000, max: 3000}),
            manufacturer: faker.company.name(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies GamingPlatform,
}
