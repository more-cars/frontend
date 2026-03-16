import {ProgrammeEpisodeDataFacade} from "../../../data/ProgrammeEpisodeDataFacade"
import {convertProgrammeEpisodeNode} from "./convertProgrammeEpisodeNode"

export async function findConnectedSuccessor(id: number) {
    const relation = await ProgrammeEpisodeDataFacade.getConnectedSuccessorNode(id)

    if (!relation) {
        return null
    }

    return convertProgrammeEpisodeNode(relation.partner_node)
}
