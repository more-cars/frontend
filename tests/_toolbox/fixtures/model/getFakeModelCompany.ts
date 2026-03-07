import {faker} from "@faker-js/faker"
import type {Company} from "../../../../src/models/node-types/companies/types/Company"

export function getFakeModelCompany() {
    return {
        id: faker.number.int({min: 12_000_000, max: 20_000_000}),
        name: faker.company.name(),
        founded: faker.number.int({min: 1000, max: 3000}),
        defunct: faker.number.int({min: 1000, max: 3000}),
        headquarters_location: faker.location.city(),
        legal_headquarters_location: faker.location.city(),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.past().toISOString(),
    } satisfies Company
}

