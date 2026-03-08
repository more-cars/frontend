import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {convertMagazineIssueNode} from "./convertMagazineIssueNode"

export async function findConnectedSuccessor(id: number) {
    const relation = await MagazineIssueDataFacade.getConnectedSuccessorNode(id)

    if (!relation) {
        return null
    }

    return convertMagazineIssueNode(relation.partner_node)
}
