import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {display} from "../../../../src/controllers/start-page/display"

describe('Start Page', () => {
    test('Show Start Page', async () => {
        vi.mock("../../../../src/controllers/start-page/display", () => ({
            display: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/')

        expect(display)
            .toHaveBeenCalledTimes(1)
    })
})
