import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {Image} from "../../../../../src/models/Image.ts"
import {expect, test, vi} from "vitest"

test('Images - Detail Page - Node not found', async () => {
    Image.findById = vi.fn().mockReturnValue(false)
    Image.findConnectedBrands = vi.fn().mockReturnValue([])
    Image.findConnectedCarModels = vi.fn().mockReturnValue([])

    const response = await request(app)
        .get('/images/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
