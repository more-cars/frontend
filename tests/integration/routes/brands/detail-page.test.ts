import request from 'supertest'
import {app} from "../../../../src/app"
import {displayNode} from "../../../../src/controllers/brands/displayNode"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/brands/displayNode", {spy: true})

test('Brands: Detail Page', async () => {
    await request(app)
        .get('/brands/999')

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
