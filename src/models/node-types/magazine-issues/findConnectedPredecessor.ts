import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {convertMagazineIssueNode} from "../magazine-issues/convertMagazineIssueNode"

export async function findConnectedPredecessor(id: number) {
    const relation = await MagazineIssueDataFacade.getConnectedPredecessorNode(id)

    if (!relation) {
        return null
    }

    return convertMagazineIssueNode(relation.partner_node)
}
