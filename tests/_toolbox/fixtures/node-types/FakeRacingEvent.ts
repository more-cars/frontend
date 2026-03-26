import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {RacingEvent} from "../../../../src/models/node-types/racing-events/types/RacingEvent"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {RacingEventNode} from "../../../../src/data/node-types/racing-events/types/RacingEventNode"

export const FakeRacingEvent = {
    model: {
        type: ModelNodeType.RACING_EVENT,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: 'F1 GP ' + faker.location.country(),
            round: faker.number.int({min: 1000, max: 3000}),
            date_from: faker.date.past().toLocaleString(),
            date_to: faker.date.past().toLocaleString(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RacingEvent,

    data: {
        type: DataNodeType.RACING_EVENT,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: 'F1 GP ' + faker.location.country(),
            round: faker.number.int({min: 1000, max: 3000}),
            date_from: faker.date.past().toLocaleString(),
            date_to: faker.date.past().toLocaleString(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RacingEventNode,
}
