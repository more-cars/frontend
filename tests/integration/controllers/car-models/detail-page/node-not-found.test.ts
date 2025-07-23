import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {CarModel} from "../../../../../src/models/CarModel.ts"

test('Car Models - Detail Page - Node not found', async () => {
    CarModel.findById = jest.fn().mockReturnValue(false)
    CarModel.findConnectedBrand = jest.fn().mockReturnValue(false)
    CarModel.findConnectedImages = jest.fn().mockReturnValue([])

    const response = await request(app)
        .get('/car-models/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
