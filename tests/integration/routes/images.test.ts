import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {ImageControllerFacade} from "../../../src/controllers/ImageControllerFacade"

vi.mock("../../../src/controllers/ImageControllerFacade", {spy: true})

describe('Images', () => {
    test('Show Node Overview Page', async () => {
        await request(app)
            .get('/images')

        expect(ImageControllerFacade.showAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        await request(app)
            .get('/images/999')

        expect(ImageControllerFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
