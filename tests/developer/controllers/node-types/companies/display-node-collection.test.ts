import {afterEach, describe, expect, test, vi} from "vitest"
import {CompanyControllerFacade} from "../../../../../src/controllers/CompanyControllerFacade"
import {CompanyModelFacade} from "../../../../../src/models/CompanyModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeCompany} from "../../../../_toolbox/fixtures/node-types/FakeCompany"
import type {Company} from "../../../../../src/models/node-types/companies/types/Company"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the Company overview page', () => {
    test('when there exist no COMPANIES', async () => {
        const spy = vi.spyOn(CompanyControllerFacade, 'showAllNodes')

        vi.spyOn(CompanyModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/companies')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when there exist multiple Companies', async () => {
        const spy = vi.spyOn(CompanyControllerFacade, 'showAllNodes')

        vi.spyOn(CompanyModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeCompany.model,
                FakeCompany.model,
                FakeCompany.model,
            ] satisfies Company[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/companies')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
