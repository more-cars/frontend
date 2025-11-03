import request from 'supertest'
import {app} from "../../../../src/app"
import {displayAllNodes} from "../../../../src/controllers/images/displayAllNodes"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/images/displayAllNodes", {spy: true})

test('Images: Overview Page', async () => {
    await request(app)
        .get('/images')

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
