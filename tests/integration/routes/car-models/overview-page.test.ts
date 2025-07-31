import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayAllNodes} from "../../../../src/controllers/car-models/displayAllNodes.ts"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/car-models/displayAllNodes.ts", {spy: true})

test('Car Models: Overview Page', async () => {
    await request(app)
        .get('/car-models')

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
