import {RacingSeriesNode} from "../../../data/node-types/racing-series/types/RacingSeriesNode"
import {RacingSeries} from "./types/RacingSeries"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertRacingSeriesNode(dataNode: RacingSeriesNode) {
    const racingSeries: RacingSeries = {
        type: ModelNodeType.RACING_SERIES,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            short_name: dataNode.data.short_name || null,
            founded: dataNode.data.founded || null,
            defunct: dataNode.data.defunct || null,
            organized_by: dataNode.data.organized_by || null,
            vehicle_type: dataNode.data.vehicle_type || null,
            country_code: dataNode.data.country_code || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return racingSeries
}
