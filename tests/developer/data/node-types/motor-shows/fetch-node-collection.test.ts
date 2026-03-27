import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllMotorShows} from "../../../../../src/data/node-types/motor-shows/getAllMotorShows"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMotorShowNode} from "../../../../../src/data/node-types/motor-shows/types/ApiMotorShowNode"

describe('Fetching MOTOR SHOW collection from data source', () => {
    test('when there are no MOTOR SHOWS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMotorShows())
            .toHaveLength(0)
    })

    test('when there are multiple MOTOR SHOWS', async () => {
        const node = {type: ApiNodeType.MOTOR_SHOW} as ApiMotorShowNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMotorShows())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMotorShows())
            .toHaveLength(0)
    })
})
