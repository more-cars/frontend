import {faker} from "@faker-js/faker"
import type {Image} from "../../../../src/models/node-types/images/types/Image"

export function getFakeModelImage() {
    return {
        id: faker.number.int({min: 12_000_000, max: 20_000_000}),
        external_id: faker.string.uuid(),
        image_provider: faker.lorem.word(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        creator: faker.person.fullName(),
        license: "CC BY",
        tags: faker.lorem.words(5),
        source: faker.internet.url(),
        image_url_original: faker.image.url(),
        image_url_xxl: faker.image.url(),
        image_url_xl: faker.image.url(),
        image_url_l: faker.image.url(),
        image_url_m: faker.image.url(),
        image_url_s: faker.image.url(),
        image_url_xs: faker.image.url(),
        created_at: faker.date.past().toISOString(),
        updated_at: faker.date.past().toISOString(),
    } satisfies Image
}

