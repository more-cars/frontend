import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a RACE TRACK detail page', () => {
    test('when the RACE TRACK does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/race-tracks/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/race-tracks/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the RACE TRACK exists', async () => {
        vi.doMock("../../../../../src/models/node-types/race-tracks/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/race-tracks/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
