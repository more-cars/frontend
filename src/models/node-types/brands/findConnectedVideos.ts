import {BrandDataFacade} from "../../../data/BrandDataFacade"
import {Video} from "../videos/types/Video"
import {convertVideoNode} from "../videos/convertVideoNode"

export async function findConnectedVideos(id: number) {
    const relations = await BrandDataFacade.getConnectedVideoNodes(id)
    const videos: Video[] = []

    for (const relation of relations) {
        videos.push(convertVideoNode(relation.partner_node))
    }

    return [...videos].sort((a, b) => (a.fields.title + "").localeCompare(b.fields.title + ""))
}
