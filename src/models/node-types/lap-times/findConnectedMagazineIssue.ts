import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {convertMagazineIssueNode} from "../magazine-issues/convertMagazineIssueNode"

export async function findConnectedMagazineIssue(id: number) {
    const relation = await LapTimeDataFacade.getConnectedMagazineIssueNode(id)

    if (!relation) {
        return null
    }

    return convertMagazineIssueNode(relation.partner_node)
}
