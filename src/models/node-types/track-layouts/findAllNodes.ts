import {TrackLayoutDataFacade} from "../../../data/TrackLayoutDataFacade"
import {TrackLayout} from "./types/TrackLayout"
import {convertTrackLayoutNode} from "./convertTrackLayoutNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await TrackLayoutDataFacade.getNodeCollection(params)

    const trackLayouts: TrackLayout[] = []

    nodes.forEach(node => {
        trackLayouts.push(convertTrackLayoutNode(node))
    })

    return trackLayouts.slice(0, nodeLimit)
}
