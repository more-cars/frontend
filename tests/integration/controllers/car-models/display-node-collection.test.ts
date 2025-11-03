import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../../src/app"
import {CarModel} from "../../../../src/models/CarModel"

describe('Requesting the CAR MODEL overview page', () => {
    test('when there exist no CAR MODELS', async () => {
        CarModel.findAll = vi.fn().mockReturnValue([])

        const response = await request(app)
            .get('/car-models')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple CAR MODELS', async () => {
        CarModel.findAll = vi.fn().mockReturnValue([
            {id: 1, name: "dummy 1"},
            {id: 2, name: "dummy 2"},
            {id: 3, name: "dummy 3"},
        ])

        const response = await request(app)
            .get('/car-models')

        expect(response.statusCode)
            .toBe(200)
    })
})
