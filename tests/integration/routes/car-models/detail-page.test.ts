import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayNode} from "../../../../src/controllers/car-models/displayNode.ts"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/car-models/displayNode.ts", {spy: true})

test('Car Models: Detail Page', async () => {
    await request(app)
        .get('/car-models/999')

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
