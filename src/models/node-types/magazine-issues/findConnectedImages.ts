import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {Image} from "../images/types/Image"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedImages(id: number) {
    const relations = await MagazineIssueDataFacade.getConnectedImageNodes(id)
    const images: Image[] = []

    for (const relation of relations) {
        images.push(convertImageNode(relation.partner_node))
    }

    return [...images].sort((a, b) => (a.fields.name + "").localeCompare(b.fields.name + ""))
}
