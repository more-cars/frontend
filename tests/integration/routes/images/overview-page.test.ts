import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayAllNodes} from "../../../../src/controllers/images/displayAllNodes.ts"
import {expect, test, vi} from "vitest"

vi.mock("../../../../src/controllers/images/displayAllNodes.ts", {spy: true})

test('Images: Overview Page', async () => {
    await request(app)
        .get('/images')

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
