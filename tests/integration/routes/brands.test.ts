import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {BrandControllerFacade} from "../../../src/controllers/BrandControllerFacade"

vi.mock("../../../src/controllers/BrandControllerFacade", {spy: true})

describe('Brands', () => {
    test('Show Node Overview Page', async () => {
        await request(app)
            .get('/brands')

        expect(BrandControllerFacade.showAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        await request(app)
            .get('/brands/999')

        expect(BrandControllerFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
