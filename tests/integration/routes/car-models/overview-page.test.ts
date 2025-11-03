import request from 'supertest'
import {app} from "../../../../src/app"
import {displayAllNodes} from "../../../../src/controllers/car-models/displayAllNodes"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/car-models/displayAllNodes", {spy: true})

test('Car Models: Overview Page', async () => {
    await request(app)
        .get('/car-models')

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
