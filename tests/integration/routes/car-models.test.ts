import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {CarModelFacade} from "../../../src/controllers/CarModelFacade"

vi.mock("../../../src/controllers/CarModelFacade", {spy: true})

describe('Car Models', () => {
    test('Show Node Overview Page', async () => {
        await request(app)
            .get('/car-models')

        expect(CarModelFacade.showAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        await request(app)
            .get('/car-models/999')

        expect(CarModelFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
