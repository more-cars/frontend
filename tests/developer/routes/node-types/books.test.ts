import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/books/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('Books', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/books')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
