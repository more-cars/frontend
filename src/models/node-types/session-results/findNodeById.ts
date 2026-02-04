import {SessionResultDataFacade} from "../../../data/SessionResultDataFacade"
import {convertSessionResultNode} from "./convertSessionResultNode"

export async function findNodeById(id: number) {
    const node = await SessionResultDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertSessionResultNode(node)
}
