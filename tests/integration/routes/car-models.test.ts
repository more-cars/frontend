import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {CarModelControllerFacade} from "../../../src/controllers/CarModelControllerFacade"

vi.mock("../../../src/controllers/CarModelControllerFacade", {spy: true})

describe('Car Models', () => {
    test('Show Node Overview Page', async () => {
        await request(app)
            .get('/car-models')

        expect(CarModelControllerFacade.showAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        await request(app)
            .get('/car-models/999')

        expect(CarModelControllerFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
