import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {CarModel} from "../../../../../src/models/CarModel.ts"
import {expect, test, vi} from "vitest"

test('Car Models - Detail Page - Node found', async () => {
    CarModel.findById = vi.fn().mockReturnValue({
        id: 123,
        name: "dummy",
        generation: 1,
        internal_code: "dDummy",
        built_from: 1234,
        built_to: 1234,
        total_production: 1234,
        created_at: "dummy",
        updated_at: "dummy",
    })
    CarModel.findConnectedBrand = vi.fn().mockReturnValue(false)
    CarModel.findConnectedImages = vi.fn().mockReturnValue([])

    const response = await request(app)
        .get('/car-models/12345')
        .send()

    expect(response.statusCode)
        .toBe(200)
})
