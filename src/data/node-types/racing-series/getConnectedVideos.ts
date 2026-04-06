import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSeriesById} from "./getRacingSeriesById"
import type {ApiRacingSeriesHasVideoRelationship} from "./types/ApiRacingSeriesHasVideoRelationship"
import type {RacingSeriesHasVideoRelationship} from "./types/RacingSeriesHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getRacingSeriesById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-series/${id}/has-video`)).data as ApiRacingSeriesHasVideoRelationship[]
    const data: RacingSeriesHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_SERIES_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_SERIES,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
