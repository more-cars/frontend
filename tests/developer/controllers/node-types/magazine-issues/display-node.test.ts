import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a MAGAZINE ISSUE detail page', () => {
    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/magazine-issues/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/magazine-issues/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the MAGAZINE ISSUE exists', async () => {
        vi.doMock("../../../../../src/models/node-types/magazine-issues/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/magazine-issues/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
