import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {SessionResult} from "../../../../src/models/node-types/session-results/types/SessionResult"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {SessionResultNode} from "../../../../src/data/node-types/session-results/types/SessionResultNode"

export const FakeSessionResult = {
    model: {
        type: ModelNodeType.SESSION_RESULT,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            position: faker.number.int({min: 1, max: 99}),
            race_number: faker.number.int({min: 1, max: 99}).toString(),
            driver_name: faker.person.fullName(),
            team_name: faker.company.name(),
            race_time: faker.number.int().toString(),
            laps: faker.number.int({min: 1, max: 99}),
            status: faker.word.noun(),
            points: faker.number.int({min: 1, max: 99}),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies SessionResult,

    data: {
        type: DataNodeType.SESSION_RESULT,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            position: faker.number.int({min: 1, max: 99}),
            race_number: faker.number.int({min: 1, max: 99}).toString(),
            driver_name: faker.person.fullName(),
            team_name: faker.company.name(),
            race_time: faker.number.int().toString(),
            laps: faker.number.int({min: 1, max: 99}),
            status: faker.word.noun(),
            points: faker.number.int({min: 1, max: 99}),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies SessionResultNode,
}
