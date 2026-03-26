import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {ProgrammeEpisode} from "../../../../src/models/node-types/programme-episodes/types/ProgrammeEpisode"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {ProgrammeEpisodeNode} from "../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeNode"

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

    data: {
        type: DataNodeType.PROGRAMME_EPISODE,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            title: faker.word.noun(),
            season_number: faker.number.int({min: 1000, max: 3000}),
            season_episode_number: faker.number.int({min: 1000, max: 3000}),
            original_air_date: faker.word.noun(),
            duration: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies ProgrammeEpisodeNode,
}
