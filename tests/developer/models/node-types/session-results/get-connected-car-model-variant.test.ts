import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/session-results/findConnectedCarModelVariant"
import {SessionResultAchievedWithCarModelVariantRelationship} from "../../../../../src/data/node-types/session-results/types/SessionResultAchievedWithCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the SESSION RESULT detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as SessionResultAchievedWithCarModelVariantRelationship
        vi.spyOn(SessionResultDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(1))
            .toHaveProperty('id', 1)
    })
})
