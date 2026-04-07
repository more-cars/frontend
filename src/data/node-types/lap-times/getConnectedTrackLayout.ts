import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeAchievedOnTrackLayoutRelationship} from "./types/ApiLapTimeAchievedOnTrackLayoutRelationship"
import {getLapTimeById} from "./getLapTimeById"
import type {LapTimeAchievedOnTrackLayoutRelationship} from "./types/LapTimeAchievedOnTrackLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {TrackLayoutNode} from "../track-layouts/types/TrackLayoutNode"

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
        id: apiData.data.relationship_id,
        name: DataRelationshipType.LAP_TIME_ACHIEVED_ON_TRACK_LAYOUT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as TrackLayoutNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
