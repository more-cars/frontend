import {ProgrammeEpisodeDataFacade} from "../../../data/ProgrammeEpisodeDataFacade"
import {convertProgrammeEpisodeNode} from "./convertProgrammeEpisodeNode"

export async function findNodeById(id: number) {
    const node = await ProgrammeEpisodeDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertProgrammeEpisodeNode(node)
}
