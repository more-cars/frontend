import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {ImageFacade} from "../../../src/controllers/ImageFacade"

vi.mock("../../../src/controllers/ImageFacade", {spy: true})

describe('Images', () => {
    test('Show Node Overview Page', async () => {
        await request(app)
            .get('/images')

        expect(ImageFacade.showAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        await request(app)
            .get('/images/999')

        expect(ImageFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
