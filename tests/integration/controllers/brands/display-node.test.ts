import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../../src/app"
import {Brand} from "../../../../src/models/Brand"

describe('Requesting a BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        Brand.findById = vi.fn().mockReturnValue(false)

        const response = await request(app)
            .get('/brands/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the BRAND exists', async () => {
        Brand.findById = vi.fn().mockReturnValue({data: {id: 1, name: "dummy 1"}})
        Brand.findConnectedCarModels = vi.fn().mockReturnValue([])
        Brand.findConnectedImages = vi.fn().mockReturnValue([])

        const response = await request(app)
            .get('/brands/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
