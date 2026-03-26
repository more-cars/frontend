import {describe, expect, test, vi} from "vitest"
import {SessionResultDataFacade} from "../../../../../src/data/SessionResultDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/session-results/findConnectedImages"
import {SessionResultHasImageRelationship} from "../../../../../src/data/node-types/session-results/types/SessionResultHasImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected IMAGES for the SESSION RESULT detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(SessionResultDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as SessionResultHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as SessionResultHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
