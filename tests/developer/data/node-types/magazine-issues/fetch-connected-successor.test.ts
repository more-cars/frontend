import {describe, expect, test, vi} from "vitest"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import * as node from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {getConnectedSuccessor} from "../../../../../src/data/node-types/magazine-issues/getConnectedSuccessor"

describe('Fetching connected SUCCESSOR from data source', () => {
    test('when there is no SUCCESSOR connected', async () => {
        const source = FakeMagazineIssue.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a SUCCESSOR connected', async () => {
        const source = FakeMagazineIssue.data
        const target = {node_type: ApiNodeType.MAGAZINE_ISSUE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedSuccessor(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the SUCCESSOR does not exist', async () => {
        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => null)

        expect(await getConnectedSuccessor(12345678))
            .toEqual(null)
    })
})
