import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {ProgrammeEpisode} from "../../../../src/models/node-types/programme-episodes/types/ProgrammeEpisode"

export const FakeProgrammeEpisode = {
    model: {
        type: ModelNodeType.PROGRAMME_EPISODE,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            title: faker.word.noun(),
            season_number: faker.number.int({min: 1000, max: 3000}),
            season_episode_number: faker.number.int({min: 1000, max: 3000}),
            original_air_date: faker.word.noun(),
            duration: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies ProgrammeEpisode,
}
