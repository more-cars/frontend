import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Programme} from "../../../../src/models/node-types/programmes/types/Programme"

export const FakeProgramme = {
    model: {
        type: ModelNodeType.PROGRAMME,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.noun(),
            aired_from_year: faker.number.int({min: 1000, max: 3000}),
            aired_until_year: faker.number.int({min: 1000, max: 3000}),
            channel: faker.word.noun(),
            total_seasons: faker.number.int({min: 1000, max: 3000}),
            total_episodes: faker.number.int({min: 1000, max: 3000}),
            regular_episode_running_time: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Programme,
}
