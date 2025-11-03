import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {Brand} from "../../../../src/models/Brand"
import {app} from "../../../../src/app"

describe('Requesting the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        Brand.findAll = vi.fn().mockReturnValue([])

        const response = await request(app)
            .get('/brands')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple BRANDS', async () => {
        Brand.findAll = vi.fn().mockReturnValue([
            {id: 1, name: "dummy 1"},
            {id: 2, name: "dummy 2"},
            {id: 3, name: "dummy 3"},
        ])

        const response = await request(app)
            .get('/brands')

        expect(response.statusCode)
            .toBe(200)
    })
})
