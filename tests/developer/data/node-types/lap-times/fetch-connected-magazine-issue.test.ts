import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/lap-times/getLapTimeById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeLapTime} from "../../../../_toolbox/fixtures/node-types/FakeLapTime"
import {getConnectedMagazineIssue} from "../../../../../src/data/node-types/lap-times/getConnectedMagazineIssue"

describe('Fetching connected MAGAZINE ISSUE from data source', () => {
    test('when there is no MAGAZINE ISSUE connected', async () => {
        const source = FakeLapTime.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getLapTimeById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMagazineIssue(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        const source = FakeLapTime.data
        const target = {type: ApiNodeType.MAGAZINE_ISSUE, id: 11111118, attributes: {}}

        const apiResponse = {data: target}

        vi.spyOn(node, 'getLapTimeById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMagazineIssue(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the LAP TIME does not exist', async () => {
        vi.spyOn(node, 'getLapTimeById')
            .mockImplementation(async () => null)

        expect(await getConnectedMagazineIssue(12345678))
            .toEqual(null)
    })
})
