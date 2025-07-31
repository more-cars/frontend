import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayNode} from "../../../../src/controllers/brands/displayNode.ts"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/brands/displayNode.ts", {spy: true})

test('Brands: Detail Page', async () => {
    await request(app)
        .get('/brands/999')

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
