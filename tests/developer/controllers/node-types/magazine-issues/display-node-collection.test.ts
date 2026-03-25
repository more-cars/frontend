import {afterEach, describe, expect, test, vi} from "vitest"
import {MagazineIssueControllerFacade} from "../../../../../src/controllers/MagazineIssueControllerFacade"
import {MagazineIssueModelFacade} from "../../../../../src/models/MagazineIssueModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import type {MagazineIssue} from "../../../../../src/models/node-types/magazine-issues/types/MagazineIssue"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MAGAZINE ISSUE overview page', () => {
    test('when there exist no MAGAZINE ISSUES', async () => {
        const spy = vi.spyOn(MagazineIssueControllerFacade, 'showAllNodes')

        vi.spyOn(MagazineIssueModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/magazine-issues')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple MAGAZINE ISSUES', async () => {
        const spy = vi.spyOn(MagazineIssueControllerFacade, 'showAllNodes')

        vi.spyOn(MagazineIssueModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeMagazineIssue.model,
                FakeMagazineIssue.model,
                FakeMagazineIssue.model,
            ] satisfies MagazineIssue[])

        const response = await supertestGet('/magazine-issues')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
