import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../../src/app"
import {CarModel} from "../../../../src/models/CarModel"

describe('Requesting a CAR MODEL detail page', () => {
    test('when the CAR MODEL does not exist', async () => {
        CarModel.findById = vi.fn().mockReturnValue(false)

        const response = await request(app)
            .get('/car-models/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the CAR MODEL exists', async () => {
        CarModel.findById = vi.fn().mockReturnValue({data: {id: 1, name: "dummy 1"}})
        CarModel.findConnectedBrand = vi.fn().mockReturnValue(false)
        CarModel.findConnectedImages = vi.fn().mockReturnValue([])

        const response = await request(app)
            .get('/car-models/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
