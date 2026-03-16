import {ProgrammeEpisodeDataFacade} from "../../../data/ProgrammeEpisodeDataFacade"
import {convertProgrammeEpisodeNode} from "./convertProgrammeEpisodeNode"

export async function findConnectedPredecessor(id: number) {
    const relation = await ProgrammeEpisodeDataFacade.getConnectedPredecessorNode(id)

    if (!relation) {
        return null
    }

    return convertProgrammeEpisodeNode(relation.partner_node)
}
