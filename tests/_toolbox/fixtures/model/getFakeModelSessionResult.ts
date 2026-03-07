import {faker} from "@faker-js/faker"
import type {SessionResult} from "../../../../src/models/node-types/session-results/types/SessionResult"

export function getFakeModelSessionResult() {
    return {
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
    } satisfies SessionResult
}

