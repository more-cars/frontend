import {RacingGameDataFacade} from "../../../data/RacingGameDataFacade"
import {convertRacingGameNode} from "./convertRacingGameNode"

export async function findNodeById(id: number) {
    const node = await RacingGameDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertRacingGameNode(node)
}
