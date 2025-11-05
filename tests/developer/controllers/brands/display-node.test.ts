import {afterEach, describe, expect, test, vi} from "vitest"
import request from "supertest"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        vi.doMock("../../../../src/models/brands/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/brands/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the BRAND exists', async () => {
        vi.doMock("../../../../src/models/brands/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))
        vi.doMock("../../../../src/models/brands/findConnectedCarModels", () => ({
            findConnectedCarModels: () => [],
        }))
        vi.doMock("../../../../src/models/brands/findConnectedImages", () => ({
            findConnectedImages: () => [],
        }))

        const {app} = await import("../../../../src/app")
        const response = await request(app)
            .get('/brands/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
