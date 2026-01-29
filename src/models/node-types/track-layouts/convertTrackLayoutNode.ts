import {TrackLayoutNode} from "../../../data/node-types/track-layouts/types/TrackLayoutNode"
import {TrackLayout} from "./types/TrackLayout"

export function convertTrackLayoutNode(dataNode: TrackLayoutNode) {
    const trackLayout: TrackLayout = {
        id: dataNode.id,
        name: dataNode.name,
        year_from: dataNode.year_from || null,
        year_to: dataNode.year_to || null,
        length: dataNode.length || null,
        length_unit: dataNode.length_unit || null,
        direction: dataNode.direction || null,
        elevation_change: dataNode.elevation_change || null,
        elevation_change_unit: dataNode.elevation_change_unit || null,
        surface: dataNode.surface || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return trackLayout
}
