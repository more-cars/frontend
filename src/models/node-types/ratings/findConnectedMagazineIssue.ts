import {RatingDataFacade} from "../../../data/RatingDataFacade"
import {convertMagazineIssueNode} from "../magazine-issues/convertMagazineIssueNode"

export async function findConnectedMagazineIssue(id: number) {
    const relation = await RatingDataFacade.getConnectedMagazineIssueNode(id)

    if (!relation) {
        return null
    }

    return convertMagazineIssueNode(relation.partner_node)
}
