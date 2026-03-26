import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Rating} from "../../../../src/models/node-types/ratings/types/Rating"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {RatingNode} from "../../../../src/data/node-types/ratings/types/RatingNode"

export const FakeRating = {
    model: {
        type: ModelNodeType.RATING,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            rating_value: faker.number.int({min: 1000, max: 3000}),
            scale_minimum: faker.number.int({min: 1000, max: 3000}),
            scale_maximum: faker.number.int({min: 1000, max: 3000}),
            scale_direction: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Rating,

    data: {
        type: DataNodeType.RATING,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            rating_value: faker.number.int({min: 1000, max: 3000}),
            scale_minimum: faker.number.int({min: 1000, max: 3000}),
            scale_maximum: faker.number.int({min: 1000, max: 3000}),
            scale_direction: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RatingNode,
}
