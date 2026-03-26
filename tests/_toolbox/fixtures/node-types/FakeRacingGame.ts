import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {RacingGame} from "../../../../src/models/node-types/racing-games/types/RacingGame"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {RacingGameNode} from "../../../../src/data/node-types/racing-games/types/RacingGameNode"

export const FakeRacingGame = {
    model: {
        type: ModelNodeType.RACING_GAME,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.commerce.productName(),
            release_year: faker.number.int({min: 1000, max: 3000}),
            developer: faker.company.name(),
            publisher: faker.company.name(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RacingGame,

    data: {
        type: DataNodeType.RACING_GAME,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.commerce.productName(),
            release_year: faker.number.int({min: 1000, max: 3000}),
            developer: faker.company.name(),
            publisher: faker.company.name(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RacingGameNode,
}
