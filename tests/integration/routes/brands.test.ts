import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {BrandFacade} from "../../../src/controllers/BrandFacade"

vi.mock("../../../src/controllers/BrandFacade", {spy: true})

describe('Brands', () => {
    test('Show Node Overview Page', async () => {
        await request(app)
            .get('/brands')

        expect(BrandFacade.showAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        await request(app)
            .get('/brands/999')

        expect(BrandFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
