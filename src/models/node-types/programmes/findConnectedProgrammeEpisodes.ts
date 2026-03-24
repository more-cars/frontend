import {ProgrammeDataFacade} from "../../../data/ProgrammeDataFacade"
import {ProgrammeEpisode} from "../programme-episodes/types/ProgrammeEpisode"
import {convertProgrammeEpisodeNode} from "../programme-episodes/convertProgrammeEpisodeNode"

export async function findConnectedProgrammeEpisodes(id: number) {
    const relations = await ProgrammeDataFacade.getConnectedProgrammeEpisodeNodes(id)
    const programmeEpisodes: ProgrammeEpisode[] = []

    for (const relation of relations) {
        programmeEpisodes.push(convertProgrammeEpisodeNode(relation.partner_node))
    }

    return [...programmeEpisodes].sort((a, b) => (a.fields.title + "").localeCompare(b.fields.title + ""))
}
