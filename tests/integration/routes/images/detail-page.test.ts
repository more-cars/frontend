import request from 'supertest'
import {app} from "../../../../src/app"
import {displayNode} from "../../../../src/controllers/images/displayNode"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/images/displayNode", {spy: true})

test('Images: Detail Page', async () => {
    await request(app)
        .get('/images/999')

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
