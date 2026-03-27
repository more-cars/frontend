import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/magazines/getMagazineById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import {getConnectedMagazineIssues} from "../../../../../src/data/node-types/magazines/getConnectedMagazineIssues"

describe('Fetching connected MAGAZINE ISSUES from data source', () => {
    test('when there are no MAGAZINE ISSUES connected', async () => {
        const source = FakeMagazine.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINE ISSUES connected', async () => {
        const source = FakeMagazine.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMagazineIssues(12345678))
            .toHaveLength(3)
    })

    test('when the MAGAZINE does not exist', async () => {
        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => null)

        expect(await getConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })
})
