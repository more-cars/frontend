import {RacingSeriesNode} from "../../../data/node-types/racing-series/types/RacingSeriesNode"
import {RacingSeries} from "./types/RacingSeries"

export function convertRacingSeriesNode(dataNode: RacingSeriesNode) {
    const racingSeries: RacingSeries = {
        id: dataNode.id,
        name: dataNode.name,
        short_name: dataNode.short_name || null,
        founded: dataNode.founded || null,
        defunct: dataNode.defunct || null,
        organized_by: dataNode.organized_by || null,
        vehicle_type: dataNode.vehicle_type || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return racingSeries
}
