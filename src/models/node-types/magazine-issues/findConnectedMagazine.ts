import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {convertMagazineNode} from "../magazines/convertMagazineNode"

export async function findConnectedMagazine(id: number) {
    const relation = await MagazineIssueDataFacade.getConnectedMagazineNode(id)

    if (!relation) {
        return null
    }

    return convertMagazineNode(relation.partner_node)
}
