import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeAchievedOnTrackLayoutRelationship} from "./types/ApiLapTimeAchievedOnTrackLayoutRelationship"
import {getLapTimeById} from "./getLapTimeById"
import type {LapTimeAchievedOnTrackLayoutRelationship} from "./types/LapTimeAchievedOnTrackLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedTrackLayout(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/achieved-on-track-layout`)) as ApiLapTimeAchievedOnTrackLayoutRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: LapTimeAchievedOnTrackLayoutRelationship = {
        id,
        name: DataRelationshipType.LAP_TIME_ACHIEVED_ON_TRACK_LAYOUT,
        source_node: sourceNode,
        source_node_type: DataNodeType.LAP_TIME,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.TRACK_LAYOUT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
