import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/programme-episodes/findAllNodes"
import type {ProgrammeEpisodeNode} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeNode"

describe('Collect node collection for the PROGRAMME EPISODE overview page', () => {
    test('when there exist no PROGRAMME EPISODES', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple PROGRAMME EPISODES', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, title: "dummy 1"} as ProgrammeEpisodeNode,
            {id: 2, title: "dummy 2"} as ProgrammeEpisodeNode,
            {id: 3, title: "dummy 3"} as ProgrammeEpisodeNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 PROGRAMME EPISODES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, title: "dummy " + i} as ProgrammeEpisodeNode)
        }

        vi.spyOn(ProgrammeEpisodeDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
