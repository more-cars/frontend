import {ProgrammeEpisodeDataFacade} from "../../../data/ProgrammeEpisodeDataFacade"
import {convertProgrammeNode} from "../programmes/convertProgrammeNode"

export async function findConnectedProgramme(id: number) {
    const relation = await ProgrammeEpisodeDataFacade.getConnectedProgrammeNode(id)

    if (!relation) {
        return null
    }

    return convertProgrammeNode(relation.partner_node)
}
