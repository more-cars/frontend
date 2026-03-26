import {afterEach, describe, expect, test, vi} from "vitest"
import {MotorShowControllerFacade} from "../../../../../src/controllers/MotorShowControllerFacade"
import {MotorShowModelFacade} from "../../../../../src/models/MotorShowModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMotorShow} from "../../../../_toolbox/fixtures/node-types/FakeMotorShow"
import type {MotorShow} from "../../../../../src/models/node-types/motor-shows/types/MotorShow"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the MOTOR SHOW overview page', () => {
    test('when there exist no MOTOR SHOWS', async () => {
        const spy = vi.spyOn(MotorShowControllerFacade, 'showAllNodes')

        vi.spyOn(MotorShowModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/motor-shows')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple MOTOR SHOWS', async () => {
        const spy = vi.spyOn(MotorShowControllerFacade, 'showAllNodes')

        vi.spyOn(MotorShowModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeMotorShow.model,
                FakeMotorShow.model,
                FakeMotorShow.model,
            ] satisfies MotorShow[])

        const response = await supertestGet('/motor-shows')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
