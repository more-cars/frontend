import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getMotorShowById} from "../../../../../src/data/node-types/motor-shows/getMotorShowById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMotorShowNode} from "../../../../../src/data/node-types/motor-shows/types/ApiMotorShowNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {MotorShowNode} from "../../../../../src/data/node-types/motor-shows/types/MotorShowNode"

describe('Fetching MOTOR SHOW node from data source', () => {
    test('when there is no MOTOR SHOW', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMotorShowById(12345678))
            .toEqual(null)
    })

    test('when there is a MOTOR SHOW', async () => {
        const apiResponse = {
            type: ApiNodeType.MOTOR_SHOW,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiMotorShowNode

        const expectedDataNode = {
            type: DataNodeType.MOTOR_SHOW,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as MotorShowNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMotorShowById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
