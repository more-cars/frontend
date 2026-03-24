import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {Rating} from "../ratings/types/Rating"
import {convertRatingNode} from "../ratings/convertRatingNode"

export async function findConnectedRatings(id: number) {
    const relations = await MagazineIssueDataFacade.getConnectedRatingNodes(id)
    const ratings: Rating[] = []

    for (const relation of relations) {
        ratings.push(convertRatingNode(relation.partner_node))
    }

    return [...ratings].sort((a, b) => a.fields.rating_value - b.fields.rating_value)
}
