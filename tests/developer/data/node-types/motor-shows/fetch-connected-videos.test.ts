import {describe, expect, test, vi} from "vitest"
import {FakeMotorShow} from "../../../../_toolbox/fixtures/node-types/FakeMotorShow"
import * as node from "../../../../../src/data/node-types/motor-shows/getMotorShowById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedVideos} from "../../../../../src/data/node-types/motor-shows/getConnectedVideos"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected VIDEOS from data source', () => {
    test('when there are no VIDEOS connected', async () => {
        const source = FakeMotorShow.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getMotorShowById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple VIDEOS connected', async () => {
        const source = FakeMotorShow.data
        const target = {node_type: ApiNodeType.VIDEO}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getMotorShowById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(3)
    })

    test('when the MOTOR SHOW does not exist', async () => {
        vi.spyOn(node, 'getMotorShowById')
            .mockImplementation(async () => null)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })
})
