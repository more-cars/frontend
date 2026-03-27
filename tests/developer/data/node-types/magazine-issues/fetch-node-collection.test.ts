import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllMagazineIssues} from "../../../../../src/data/node-types/magazine-issues/getAllMagazineIssues"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMagazineIssueNode} from "../../../../../src/data/node-types/magazine-issues/types/ApiMagazineIssueNode"

describe('Fetching MAGAZINE ISSUE collection from data source', () => {
    test('when there are no MAGAZINE ISSUES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMagazineIssues())
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINE ISSUES', async () => {
        const node = {type: ApiNodeType.MAGAZINE_ISSUE} as ApiMagazineIssueNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMagazineIssues())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMagazineIssues())
            .toHaveLength(0)
    })
})
