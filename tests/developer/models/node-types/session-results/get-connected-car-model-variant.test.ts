import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/session-results/findConnectedCarModelVariant"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {SessionResultAchievedWithCarModelVariantRelationship} from "../../../../../src/data/node-types/session-results/types/SessionResultAchievedWithCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the SESSION RESULT detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModelVariant.data} as unknown as SessionResultAchievedWithCarModelVariantRelationship

        vi.spyOn(SessionResultDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
