import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/programmes/findNodeById"
import type {ProgrammeNode} from "../../../../../src/data/node-types/programmes/types/ProgrammeNode"

describe('Collect node for the PROGRAMME detail page', () => {
    test('when the PROGRAMME does not exist', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the PROGRAMME exists', async () => {
        const node = {id: 1, name: "dummy 1"} as ProgrammeNode
        vi.spyOn(ProgrammeDataFacade, 'getNodeById').mockResolvedValue(node)

        const programme = await findNodeById(1)

        expect(programme?.id).toEqual(node.id)
        expect(programme?.name).toEqual(node.name)
    })
})
