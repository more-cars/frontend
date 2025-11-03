import request from 'supertest'
import {app} from "../../../../../src/app"
import {CarModel} from "../../../../../src/models/CarModel"
import {expect, test, vi} from "vitest"

test('Car Models - Detail Page - Node not found', async () => {
    CarModel.findById = vi.fn().mockReturnValue(false)

    const response = await request(app)
        .get('/car-models/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
