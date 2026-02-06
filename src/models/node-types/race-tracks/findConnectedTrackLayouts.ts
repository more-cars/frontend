import {RaceTrackDataFacade} from "../../../data/RaceTrackDataFacade"
import {TrackLayout} from "../track-layouts/types/TrackLayout"
import {convertTrackLayoutNode} from "../track-layouts/convertTrackLayoutNode"

export async function findConnectedTrackLayouts(id: number) {
    const relations = await RaceTrackDataFacade.getConnectedTrackLayoutNodes(id)
    const trackLayouts: TrackLayout[] = []

    for (const relation of relations) {
        trackLayouts.push(convertTrackLayoutNode(relation.partner_node))
    }

    return [...trackLayouts].sort((a, b) => (a.name + a.year_from + "").localeCompare(b.name + b.year_from + ""))
}
