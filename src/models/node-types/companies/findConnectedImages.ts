import {CompanyDataFacade} from "../../../data/CompanyDataFacade"
import {convertImageNode} from "../images/convertImageNode"
import {Image} from "../images/types/Image"

export async function findConnectedImages(id: number) {
    const relations = await CompanyDataFacade.getConnectedImageNodes(id)
    const images: Image[] = []

    for (const relation of relations) {
        images.push(convertImageNode(relation.partner_node))
    }

    return images
}
