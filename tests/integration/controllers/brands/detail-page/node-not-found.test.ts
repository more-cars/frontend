import request from 'supertest'
import {app} from "../../../../../src/app"
import {Brand} from "../../../../../src/models/Brand"
import {expect, test, vi} from "vitest"

test('Brands - Detail Page - Node not found', async () => {
    Brand.findById = vi.fn().mockReturnValue(false)

    const response = await request(app)
        .get('/brands/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
