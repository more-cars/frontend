import request from 'supertest'
import {app} from "../../../../../src/app"
import {Image} from "../../../../../src/models/Image"
import {expect, test, vi} from "vitest"

test('Images - Detail Page - Node not found', async () => {
    Image.findById = vi.fn().mockReturnValue(false)

    const response = await request(app)
        .get('/images/-42')
        .send()

    expect(response.statusCode)
        .toBe(404)
})
