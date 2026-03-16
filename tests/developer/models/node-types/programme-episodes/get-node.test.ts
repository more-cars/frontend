import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/programme-episodes/findNodeById"
import type {ProgrammeEpisodeNode} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeNode"

describe('Collect node for the PROGRAMME EPISODE detail page', () => {
    test('when the PROGRAMME EPISODE does not exist', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the PROGRAMME EPISODE exists', async () => {
        const node = {id: 1, title: "dummy 1"} as ProgrammeEpisodeNode
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getNodeById').mockResolvedValue(node)

        const programmeEpisode = await findNodeById(1)

        expect(programmeEpisode?.id).toEqual(node.id)
        expect(programmeEpisode?.title).toEqual(node.title)
    })
})
