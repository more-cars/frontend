import {describe, expect, test} from 'vitest'
import {getApiBaseUrl} from "../../../src/data/getApiBaseUrl"

describe('Determining the base URL of the API', () => {
    test('When API URL was provided', async () => {
        process.env.API_URL = 'http://test123.internal:3000'

        expect(getApiBaseUrl())
            .toEqual('http://test123.internal:3000')
    })

    test('When API URL is missing', async () => {
        delete process.env.API_URL

        expect(() => {
            getApiBaseUrl()
        }).toThrowError()
    })
})
