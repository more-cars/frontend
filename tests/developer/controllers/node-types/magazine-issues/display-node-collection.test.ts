import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MAGAZINE ISSUE overview page', () => {
    test('when there exist no MAGAZINE ISSUES', async () => {
        vi.doMock("../../../../../src/models/node-types/magazine-issues/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/magazine-issues')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple MAGAZINE ISSUES', async () => {
        vi.doMock("../../../../../src/models/node-types/magazine-issues/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, title: "dummy 1"},
                {id: 2, title: "dummy 2"},
                {id: 3, title: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/magazine-issues')

        expect(response.statusCode)
            .toBe(200)
    })
})
