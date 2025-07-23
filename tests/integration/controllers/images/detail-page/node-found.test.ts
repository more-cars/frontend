import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {Image} from "../../../../../src/models/Image.ts"

test('Images - Detail Page - Node found', async () => {
    Image.findById = jest.fn().mockReturnValue({
        id: 1234,
        image_provider: "dummy",
        external_id: "dummy",
        name: "dummy",
        description: "dummy",
        creator: "dummy",
        license: "dummy",
        tags: "dummy",
        source: "dummy",
        image_url_original: "dummy",
        image_url_xxl: "dummy",
        image_url_xl: "dummy",
        image_url_l: "dummy",
        image_url_m: "dummy",
        image_url_s: "dummy",
        image_url_xs: "dummy",
        created_at: "dummy",
        updated_at: "dummy",
    })
    Image.findConnectedBrands = jest.fn().mockReturnValue([])
    Image.findConnectedCarModels = jest.fn().mockReturnValue([])

    const response = await request(app)
        .get('/images/12345')
        .send()

    expect(response.statusCode)
        .toBe(200)
})
