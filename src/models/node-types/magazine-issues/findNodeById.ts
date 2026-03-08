import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {convertMagazineIssueNode} from "./convertMagazineIssueNode"

export async function findNodeById(id: number) {
    const node = await MagazineIssueDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertMagazineIssueNode(node)
}
