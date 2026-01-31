import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RACE TRACK overview page', () => {
    test('when there exist no RACE TRACKS', async () => {
        vi.doMock("../../../../../src/models/node-types/race-tracks/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/race-tracks')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple RACE TRACKS', async () => {
        vi.doMock("../../../../../src/models/node-types/race-tracks/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/race-tracks')

        expect(response.statusCode)
            .toBe(200)
    })
})
