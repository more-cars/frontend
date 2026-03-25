import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../src/controllers/start-page/display"
import {supertestGet} from "../../supertestGet"

describe('Start Page', () => {
    test('Show Start Page', async () => {
        const spy = vi.spyOn(node, 'display')

        await supertestGet('/')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
