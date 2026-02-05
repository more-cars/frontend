import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {Image} from "../images/types/Image"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedImages(id: number) {
    const relations = await LapTimeDataFacade.getConnectedImageNodes(id)
    const images: Image[] = []

    for (const relation of relations) {
        images.push(convertImageNode(relation.partner_node))
    }

    return images
}
