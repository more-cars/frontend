import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {getConnectedCarModels} from "../../../../../src/data/node-types/magazine-issues/getConnectedCarModels"

describe('Fetching connected CAR MODELS from data source', () => {
    test('when there are no CAR MODELS connected', async () => {
        const source = FakeMagazineIssue.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModels(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODELS connected', async () => {
        const source = FakeMagazineIssue.data
        const target = {node_type: ApiNodeType.CAR_MODEL}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModels(12345678))
            .toHaveLength(3)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.spyOn(node, 'getMagazineIssueById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModels(12345678))
            .toHaveLength(0)
    })
})
