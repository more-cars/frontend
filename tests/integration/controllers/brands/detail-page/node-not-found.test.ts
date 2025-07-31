import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {Brand} from "../../../../../src/models/Brand.ts"
import {expect, test, vi} from "vitest"

test('Brands - Detail Page - Node not found', async () => {
    Brand.findById = vi.fn().mockReturnValue(false)
    Brand.findConnectedCarModels = vi.fn().mockReturnValue([])
    Brand.findConnectedImages = vi.fn().mockReturnValue([])

    const response = await request(app)
        .get('/brands/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
