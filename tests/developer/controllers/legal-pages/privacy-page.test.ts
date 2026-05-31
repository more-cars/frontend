import {describe, expect, test} from "vitest"
import {supertestGet} from "../../supertestGet"

describe('Privacy Page', () => {
    test('is reachable and contains data', async () => {
        const response = await supertestGet('/privacy')

        expect(response.statusCode)
            .toBe(200)
    })
})
