import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../src/app"
import {displayAllNodes} from "../../../src/controllers/node-types/brands/displayAllNodes"
import {displayNode} from "../../../src/controllers/node-types/brands/displayNode"

describe('Brands', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../src/controllers/node-types/brands/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await request(app)
            .get('/brands')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../src/controllers/node-types/brands/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await request(app)
            .get('/brands/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
