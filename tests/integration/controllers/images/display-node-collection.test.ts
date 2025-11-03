import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../../src/app"
import {Image} from "../../../../src/models/Image"

describe('Requesting the IMAGE overview page', () => {
    test('when there exist no IMAGES', async () => {
        Image.findAll = vi.fn().mockReturnValue([])

        const response = await request(app)
            .get('/images')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple IMAGES', async () => {
        Image.findAll = vi.fn().mockReturnValue([
            {id: 1, name: "dummy 1"},
            {id: 2, name: "dummy 2"},
            {id: 3, name: "dummy 3"},
        ])

        const response = await request(app)
            .get('/images')

        expect(response.statusCode)
            .toBe(200)
    })
})
