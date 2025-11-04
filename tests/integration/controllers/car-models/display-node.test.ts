import {afterEach, describe, expect, test, vi} from "vitest"
import request from "supertest"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a CAR MODEL detail page', () => {
    test('when the CAR MODEL does not exist', async () => {
        vi.doMock("../../../../src/models/car-models/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/car-models/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the CAR MODEL exists', async () => {
        vi.doMock("../../../../src/models/car-models/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))
        vi.doMock("../../../../src/models/car-models/findConnectedBrand", () => ({
            findConnectedBrand: () => false,
        }))
        vi.doMock("../../../../src/models/car-models/findConnectedImages", () => ({
            findConnectedImages: () => [],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/car-models/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
