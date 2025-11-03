import request from 'supertest'
import {app} from "../../../../src/app"
import {displayAllNodes} from "../../../../src/controllers/brands/displayAllNodes"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/brands/displayAllNodes", {spy: true})

test('Brands: Overview Page', async () => {
    await request(app)
        .get('/brands')

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
