import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {LapTime} from "../../../../src/models/node-types/lap-times/types/LapTime"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {LapTimeNode} from "../../../../src/data/node-types/lap-times/types/LapTimeNode"

export const FakeLapTime = {
    model: {
        type: ModelNodeType.LAP_TIME,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            time: faker.word.noun(),
            driver_name: faker.person.fullName(),
            date: faker.date.past().toISOString().substring(0, 10),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies LapTime,

    data: {
        type: DataNodeType.LAP_TIME,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            time: faker.word.noun(),
            driver_name: faker.person.fullName(),
            date: faker.date.past().toISOString().substring(0, 10),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies LapTimeNode,
}
