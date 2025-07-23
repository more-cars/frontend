import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {Image} from "../../../../../src/models/Image.ts"

test('Images - Detail Page - Node not found', async () => {
    Image.findById = jest.fn().mockReturnValue(false)
    Image.findConnectedBrands = jest.fn().mockReturnValue([])
    Image.findConnectedCarModels = jest.fn().mockReturnValue([])

    const response = await request(app)
        .get('/images/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
