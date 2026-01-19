import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a COMPANY detail page', () => {
    test('when the COMPANY does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/companies/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/companies/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the COMPANY exists', async () => {
        vi.doMock("../../../../../src/models/node-types/companies/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/companies/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
