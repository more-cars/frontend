import {afterEach, describe, expect, test, vi} from "vitest"
import request from "supertest"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        vi.doMock("../../../../src/models/brands/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/brands')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple BRANDS', async () => {
        vi.doMock("../../../../src/models/brands/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/brands')

        expect(response.statusCode)
            .toBe(200)
    })
})
