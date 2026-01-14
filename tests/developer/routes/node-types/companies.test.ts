import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/companies/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('Companies', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/companies/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/companies')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
