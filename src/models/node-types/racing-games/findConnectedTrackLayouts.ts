import {RacingGameDataFacade} from "../../../data/RacingGameDataFacade"
import {TrackLayout} from "../track-layouts/types/TrackLayout"
import {convertTrackLayoutNode} from "../track-layouts/convertTrackLayoutNode"

export async function findConnectedTrackLayouts(id: number) {
    const relations = await RacingGameDataFacade.getConnectedTrackLayoutNodes(id)
    const trackLayouts: TrackLayout[] = []

    for (const relation of relations) {
        trackLayouts.push(convertTrackLayoutNode(relation.partner_node))
    }

    return [...trackLayouts].sort((a, b) => (a.fields.name + "").localeCompare(b.fields.name + ""))
}
