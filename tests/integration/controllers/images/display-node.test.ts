import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../../src/app"
import {Image} from "../../../../src/models/Image"

describe('Requesting a IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        Image.findById = vi.fn().mockReturnValue(false)

        const response = await request(app)
            .get('/images/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the IMAGE exists', async () => {
        Image.findById = vi.fn().mockReturnValue({data: {id: 1, name: "dummy 1"}})
        Image.findConnectedBrands = vi.fn().mockReturnValue([])
        Image.findConnectedCarModels = vi.fn().mockReturnValue([])

        const response = await request(app)
            .get('/images/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
