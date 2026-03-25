import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Price} from "../../../../src/models/node-types/prices/types/Price"

export const FakePrice = {
    model: {
        type: ModelNodeType.PRICE,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            price: faker.number.int({min: 10000, max: 100000}),
            price_year: faker.number.int({min: 1000, max: 3000}),
            currency_code: faker.finance.currencyCode(),
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Price,
}
