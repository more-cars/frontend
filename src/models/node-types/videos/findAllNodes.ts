import {VideoDataFacade} from "../../../data/VideoDataFacade"
import {Video} from "./types/Video"
import {convertVideoNode} from "./convertVideoNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await VideoDataFacade.getNodeCollection(params)

    const videos: Video[] = []

    nodes.forEach(node => {
        videos.push(convertVideoNode(node))
    })

    return videos.slice(0, nodeLimit)
}
