import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayNode} from "../../../../src/controllers/images/displayNode.ts"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/images/displayNode.ts", {spy: true})

test('Images: Detail Page', async () => {
    await request(app)
        .get('/images/999')

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
