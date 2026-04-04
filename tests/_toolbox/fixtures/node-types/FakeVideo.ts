import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Video} from "../../../../src/models/node-types/videos/types/Video"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {VideoNode} from "../../../../src/data/node-types/videos/types/VideoNode"

export const FakeVideo = {
    model: {
        type: ModelNodeType.VIDEO,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            video_provider: 'youtube',
            external_id: faker.string.uuid(),
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            creator: faker.person.fullName(),
            license: faker.word.noun(),
            tags: faker.lorem.words(5),
            source: faker.internet.url(),
            duration: faker.word.noun(),
            thumbnail_url_l: faker.internet.url(),
            thumbnail_url_m: faker.internet.url(),
            thumbnail_url_s: faker.internet.url(),
            thumbnail_url_xs: faker.internet.url(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies Video,

    data: {
        type: DataNodeType.VIDEO,
        data: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
            video_provider: 'youtube',
            external_id: faker.string.uuid(),
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            creator: faker.person.fullName(),
            license: faker.word.noun(),
            tags: faker.lorem.words(5),
            source: faker.internet.url(),
            duration: faker.word.noun(),
            thumbnail_url_l: faker.internet.url(),
            thumbnail_url_m: faker.internet.url(),
            thumbnail_url_s: faker.internet.url(),
            thumbnail_url_xs: faker.internet.url(),
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies VideoNode,
}
