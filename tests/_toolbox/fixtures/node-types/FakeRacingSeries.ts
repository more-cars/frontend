import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {RacingSeries} from "../../../../src/models/node-types/racing-series/types/RacingSeries"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {RacingSeriesNode} from "../../../../src/data/node-types/racing-series/types/RacingSeriesNode"

export const FakeRacingSeries = {
    model: {
        type: ModelNodeType.RACING_SERIES,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.words(3),
            short_name: faker.word.noun().toUpperCase(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            organized_by: faker.company.name(),
            vehicle_type: faker.vehicle.type(),
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RacingSeries,

    data: {
        type: DataNodeType.RACING_SERIES,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.words(3),
            short_name: faker.word.noun().toUpperCase(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            organized_by: faker.company.name(),
            vehicle_type: faker.vehicle.type(),
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RacingSeriesNode,
}
