import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Image} from "../../../../src/models/node-types/images/types/Image"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {ImageNode} from "../../../../src/data/node-types/images/types/ImageNode"

export const FakeImage = {
    model: {
        type: ModelNodeType.IMAGE,
        fields: {
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
        },
    } satisfies Image,

    data: {
        type: DataNodeType.IMAGE,
        data: {
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
        },
    } satisfies ImageNode,
}
