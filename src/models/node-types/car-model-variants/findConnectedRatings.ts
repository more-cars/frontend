import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {Rating} from "../ratings/types/Rating"
import {convertRatingNode} from "../ratings/convertRatingNode"

export async function findConnectedRatings(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedRatingNodes(id)
    const ratings: Rating[] = []

    for (const relation of relations) {
        ratings.push(convertRatingNode(relation.partner_node))
    }

    return [...ratings].sort((a, b) => a.rating_value - b.rating_value)
}
