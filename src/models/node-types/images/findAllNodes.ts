import {ImageDataFacade} from "../../../data/ImageDataFacade"
import {Image} from "./types/Image"
import {convertImageNode} from "./convertImageNode"

const nodeLimit = 100

export async function findAllNodes(params: { page: number }) {
    const nodes = await ImageDataFacade.getNodeCollection(params)

    const images: Image[] = []

    nodes.forEach(node => {
        images.push(convertImageNode(node))
    })

    return images.slice(0, nodeLimit)
}
