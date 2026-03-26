import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Company} from "../../../../src/models/node-types/companies/types/Company"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {CompanyNode} from "../../../../src/data/node-types/companies/types/CompanyNode"

export const FakeCompany = {
    model: {
        type: ModelNodeType.COMPANY,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.company.name(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            headquarters_location: faker.location.city(),
            legal_headquarters_location: faker.location.city(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Company,

    data: {
        type: DataNodeType.COMPANY,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            name: faker.company.name(),
            founded: faker.number.int({min: 1000, max: 3000}),
            defunct: faker.number.int({min: 1000, max: 3000}),
            headquarters_location: faker.location.city(),
            legal_headquarters_location: faker.location.city(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies CompanyNode,
}
