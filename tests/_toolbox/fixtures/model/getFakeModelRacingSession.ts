import {faker} from "@faker-js/faker"
import type {RacingSession} from "../../../../src/models/node-types/racing-sessions/types/RacingSession"

export function getFakeModelRacingSession() {
    return {
        id: faker.number.int({min: 12_000_000, max: 20_000_000}),
        name: faker.word.noun(),
        start_date: faker.date.past().toLocaleString(),
        start_time: faker.number.int().toString(),
        duration: faker.number.int({min: 1000, max: 3000}),
        duration_unit: faker.science.unit().name,
        distance: faker.number.int({min: 1000, max: 3000}),
        distance_unit: faker.science.unit().name,
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.past().toISOString(),
    } satisfies RacingSession
}

