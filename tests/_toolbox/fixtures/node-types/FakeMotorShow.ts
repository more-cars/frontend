import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {MotorShow} from "../../../../src/models/node-types/motor-shows/types/MotorShow"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {MotorShowNode} from "../../../../src/data/node-types/motor-shows/types/MotorShowNode"

export const FakeMotorShow = {
    model: {
        type: ModelNodeType.MOTOR_SHOW,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.noun(),
            date_from: faker.word.noun(),
            date_until: faker.word.noun(),
            location: faker.word.noun(),
            target_audience: faker.word.noun(),
            focus: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies MotorShow,

    data: {
        type: DataNodeType.MOTOR_SHOW,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.word.noun(),
            date_from: faker.word.noun(),
            date_until: faker.word.noun(),
            location: faker.word.noun(),
            target_audience: faker.word.noun(),
            focus: faker.word.noun(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies MotorShowNode,
}
