import {TrackLayoutNode} from "../../../data/node-types/track-layouts/types/TrackLayoutNode"
import {TrackLayout} from "./types/TrackLayout"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertTrackLayoutNode(dataNode: TrackLayoutNode) {
    const trackLayout: TrackLayout = {
        type: ModelNodeType.TRACK_LAYOUT,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            year_from: dataNode.data.year_from || null,
            year_to: dataNode.data.year_to || null,
            length: dataNode.data.length || null,
            length_unit: dataNode.data.length_unit || null,
            direction: dataNode.data.direction || null,
            elevation_change: dataNode.data.elevation_change || null,
            elevation_change_unit: dataNode.data.elevation_change_unit || null,
            surface: dataNode.data.surface || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return trackLayout
}
