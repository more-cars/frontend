import {MagazineDataFacade} from "../../../data/MagazineDataFacade"
import {convertMagazineNode} from "./convertMagazineNode"

export async function findNodeById(id: number) {
    const node = await MagazineDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertMagazineNode(node)
}
