import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {TrackLayout} from "../../../../src/models/node-types/track-layouts/types/TrackLayout"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {TrackLayoutNode} from "../../../../src/data/node-types/track-layouts/types/TrackLayoutNode"

export const FakeTrackLayout = {
    model: {
        type: ModelNodeType.TRACK_LAYOUT,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.words(3),
            year_from: faker.number.int({min: 1000, max: 3000}),
            year_to: faker.number.int({min: 1000, max: 3000}),
            length: faker.number.int({min: 1000, max: 3000}),
            length_unit: faker.science.unit().name,
            direction: faker.word.noun(),
            elevation_change: faker.number.int({min: 1000, max: 3000}),
            elevation_change_unit: faker.science.unit().name,
            surface: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies TrackLayout,

    data: {
        type: DataNodeType.TRACK_LAYOUT,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.words(3),
            year_from: faker.number.int({min: 1000, max: 3000}),
            year_to: faker.number.int({min: 1000, max: 3000}),
            length: faker.number.int({min: 1000, max: 3000}),
            length_unit: faker.science.unit().name,
            direction: faker.word.noun(),
            elevation_change: faker.number.int({min: 1000, max: 3000}),
            elevation_change_unit: faker.science.unit().name,
            surface: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies TrackLayoutNode,
}
