import {afterEach, describe, expect, test, vi} from "vitest"
import request from "supertest"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        vi.doMock("../../../../src/models/node-types/images/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/images/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the IMAGE exists', async () => {
        vi.doMock("../../../../src/models/node-types/images/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))
        vi.doMock("../../../../src/models/node-types/images/findConnectedBrands", () => ({
            findConnectedBrands: () => [],
        }))
        vi.doMock("../../../../src/models/node-types/images/findConnectedCarModels", () => ({
            findConnectedCarModels: () => [],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/images/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
