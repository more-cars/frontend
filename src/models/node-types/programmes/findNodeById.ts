import {ProgrammeDataFacade} from "../../../data/ProgrammeDataFacade"
import {convertProgrammeNode} from "./convertProgrammeNode"

export async function findNodeById(id: number) {
    const node = await ProgrammeDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertProgrammeNode(node)
}
