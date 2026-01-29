import {TrackLayoutDataFacade} from "../../../data/TrackLayoutDataFacade"
import {convertTrackLayoutNode} from "./convertTrackLayoutNode"

export async function findNodeById(id: number) {
    const node = await TrackLayoutDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertTrackLayoutNode(node)
}
