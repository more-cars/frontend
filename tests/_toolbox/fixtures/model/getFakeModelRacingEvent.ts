import {faker} from "@faker-js/faker"
import type {RacingEvent} from "../../../../src/models/node-types/racing-events/types/RacingEvent"

export function getFakeModelRacingEvent() {
    return {
        id: faker.number.int({min: 12_000_000, max: 20_000_000}),
        name: 'F1 GP ' + faker.location.country(),
        round: faker.number.int({min: 1000, max: 3000}),
        date_from: faker.date.past().toLocaleString(),
        date_to: faker.date.past().toLocaleString(),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.past().toISOString(),
    } satisfies RacingEvent
}

