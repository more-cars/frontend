import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/programmes/findConnectedImages"
import {ProgrammeHasImageRelationship} from "../../../../../src/data/node-types/programmes/types/ProgrammeHasImageRelationship"

describe('Collect connected IMAGES for the PROGRAMME detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ProgrammeHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ProgrammeHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
