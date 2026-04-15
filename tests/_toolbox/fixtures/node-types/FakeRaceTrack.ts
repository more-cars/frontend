import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {RaceTrack} from "../../../../src/models/node-types/race-tracks/types/RaceTrack"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {RaceTrackNode} from "../../../../src/data/node-types/race-tracks/types/RaceTrackNode"

export const FakeRaceTrack = {
    model: {
        type: ModelNodeType.RACE_TRACK,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.location.city() + ' Racetrack',
            opened: faker.number.int({min: 1000, max: 3000}),
            closed: faker.number.int({min: 1000, max: 3000}),
            type: faker.word.noun(),
            location: faker.location.city(),
            geo_position: faker.location.latitude() + ' ' + faker.location.longitude,
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RaceTrack,

    data: {
        type: DataNodeType.RACE_TRACK,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.location.city() + ' Racetrack',
            opened: faker.number.int({min: 1000, max: 3000}),
            closed: faker.number.int({min: 1000, max: 3000}),
            type: faker.word.noun(),
            location: faker.location.city(),
            geo_position: faker.location.latitude() + ' ' + faker.location.longitude,
            country_code: faker.location.countryCode(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies RaceTrackNode,
}
