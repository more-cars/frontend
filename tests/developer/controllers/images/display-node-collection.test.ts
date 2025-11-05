import {afterEach, describe, expect, test, vi} from "vitest"
import request from "supertest"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the IMAGE overview page', () => {
    test('when there exist no IMAGES', async () => {
        vi.doMock("../../../../src/models/images/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/images')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple IMAGES', async () => {
        vi.doMock("../../../../src/models/images/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/images')

        expect(response.statusCode)
            .toBe(200)
    })
})
