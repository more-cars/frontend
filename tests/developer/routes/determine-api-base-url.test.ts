import {describe, expect, test} from 'vitest'
import {getApiBaseUrl} from "../../../src/data/getApiBaseUrl"

describe('Determining the base URL of the API', () => {
    test('When API runs on HTTP', async () => {
        process.env.API_HOST = 'test123.internal'

        process.env.API_PORT = '80'
        expect(getApiBaseUrl())
            .toEqual('http://test123.internal:80')

        process.env.API_PORT = '8080'
        expect(getApiBaseUrl())
            .toEqual('http://test123.internal:8080')
    })

    test('When API runs on HTTPS', async () => {
        process.env.API_HOST = 'test123.internal'

        process.env.API_PORT = '443'
        expect(getApiBaseUrl())
            .toEqual('https://test123.internal:443')
    })

    test('When port is missing', async () => {
        process.env.API_HOST = 'test123.internal'
        delete process.env.API_PORT

        expect(() => {
            getApiBaseUrl()
        }).toThrowError()
    })

    test('When host is missing', async () => {
        delete process.env.API_HOST
        process.env.API_PORT = '443'

        expect(() => {
            getApiBaseUrl()
        }).toThrowError()
    })
})
