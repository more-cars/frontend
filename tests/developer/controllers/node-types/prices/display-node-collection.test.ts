import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"
import {PriceControllerFacade} from "../../../../../src/controllers/PriceControllerFacade"
import {PriceModelFacade} from "../../../../../src/models/PriceModelFacade"
import {FakePrice} from "../../../../_toolbox/fixtures/node-types/FakePrice"
import type {Price} from "../../../../../src/models/node-types/prices/types/Price"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the PRICE overview page', () => {
    test('when there exist no PRICES', async () => {
        const spy = vi.spyOn(PriceControllerFacade, 'showAllNodes')

        vi.spyOn(PriceModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/prices')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple PRICES', async () => {
        const spy = vi.spyOn(PriceControllerFacade, 'showAllNodes')

        vi.spyOn(PriceModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakePrice.model,
                FakePrice.model,
                FakePrice.model,
            ] satisfies Price[])

        const response = await supertestGet('/prices')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
