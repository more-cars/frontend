import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingSeries} from "../../../../_toolbox/fixtures/node-types/FakeRacingSeries"
import {RacingSeriesModelFacade} from "../../../../../src/models/RacingSeriesModelFacade"
import * as node from "../../../../../src/controllers/node-types/racing-series/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a RACING SERIES detail page', () => {
    test('when the RACING SERIES does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/racing-series-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the RACING SERIES exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingSeries.model))
        vi.spyOn(RacingSeriesModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRacingSeries.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/racing-series-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
