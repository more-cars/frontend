import {afterEach, describe, expect, test, vi} from "vitest"
import request from "supertest"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the CAR MODEL overview page', () => {
    test('when there exist no CAR MODELS', async () => {
        vi.doMock("../../../../src/models/node-types/car-models/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/car-models')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple CAR MODELS', async () => {
        vi.doMock("../../../../src/car-models/brands/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/car-models')

        expect(response.statusCode)
            .toBe(200)
    })
})
