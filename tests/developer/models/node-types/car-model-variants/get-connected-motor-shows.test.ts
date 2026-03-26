import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedMotorShows} from "../../../../../src/models/node-types/car-model-variants/findConnectedMotorShows"
import {CarModelVariantPresentedAtMotorShowRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantPresentedAtMotorShowRelationship"
import {FakeMotorShow} from "../../../../_toolbox/fixtures/node-types/FakeMotorShow"

describe('Collect connected MOTOR SHOWS for the CAR MODEL VARIANT detail page', () => {
    test('when no MOTOR SHOWS are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMotorShowNodes').mockResolvedValue([])

        expect(await findConnectedMotorShows(12345678))
            .toHaveLength(0)
    })

    test('when there are MOTOR SHOWS connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMotorShowNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeMotorShow.data} as unknown as CarModelVariantPresentedAtMotorShowRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeMotorShow.data} as unknown as CarModelVariantPresentedAtMotorShowRelationship,
        ])

        expect(await findConnectedMotorShows(12345678))
            .toHaveLength(2)
    })
})
