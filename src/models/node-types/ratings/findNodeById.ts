import {RatingDataFacade} from "../../../data/RatingDataFacade"
import {convertRatingNode} from "./convertRatingNode"

export async function findNodeById(id: number) {
    const node = await RatingDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertRatingNode(node)
}
