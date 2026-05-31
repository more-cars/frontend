import {describe, expect, test} from "vitest"
import {supertestGet} from "../../supertestGet"

describe('Contact Page', () => {
    test('is reachable and contains data', async () => {
        const response = await supertestGet('/contact')

        expect(response.statusCode)
            .toBe(200)
    })
})
