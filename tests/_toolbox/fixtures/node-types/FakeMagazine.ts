import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Magazine} from "../../../../src/models/node-types/magazines/types/Magazine"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {MagazineNode} from "../../../../src/data/node-types/magazines/types/MagazineNode"

export const FakeMagazine = {
    model: {
        type: ModelNodeType.MAGAZINE,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.company.name(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            focus: faker.helpers.arrayElement(['new-cars', 'race-cars']),
            publication_frequency: faker.helpers.arrayElement(['weekly', 'monthly']),
            single_copy_price: faker.number.float({min: 1, max: 50, fractionDigits: 2}),
            single_copy_price_unit: faker.finance.currency().code,
            publication_format: faker.helpers.arrayElement(['print', 'digital']),
            circulation: faker.number.int({min: 1000, max: 1000000}),
            circulation_year: faker.number.int({min: 1000, max: 3000}),
            publisher: faker.company.name(),
            issn: '1350-9624',
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Magazine,

    data: {
        type: DataNodeType.MAGAZINE,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.company.name(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            focus: faker.helpers.arrayElement(['new-cars', 'race-cars']),
            publication_frequency: faker.helpers.arrayElement(['weekly', 'monthly']),
            single_copy_price: faker.number.float({min: 1, max: 50, fractionDigits: 2}),
            single_copy_price_unit: faker.finance.currency().code,
            publication_format: faker.helpers.arrayElement(['print', 'digital']),
            circulation: faker.number.int({min: 1000, max: 1000000}),
            circulation_year: faker.number.int({min: 1000, max: 3000}),
            publisher: faker.company.name(),
            issn: '1350-9624',
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies MagazineNode,
}
