import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {Brand} from "../../../../../src/models/Brand.ts"

test('Brands - Detail Page - Node not found', async () => {
    Brand.findById = jest.fn().mockReturnValue(false)
    Brand.findConnectedCarModels = jest.fn().mockReturnValue([])
    Brand.findConnectedImages = jest.fn().mockReturnValue([])

    const response = await request(app)
        .get('/brands/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
