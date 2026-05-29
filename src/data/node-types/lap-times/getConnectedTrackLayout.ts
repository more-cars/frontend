import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeAchievedOnTrackLayoutRelationship} from "./types/ApiLapTimeAchievedOnTrackLayoutRelationship"
import {getLapTimeById} from "./getLapTimeById"
import type {LapTimeAchievedOnTrackLayoutRelationship} from "./types/LapTimeAchievedOnTrackLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.LAP_TIME_ACHIEVED_ON_TRACK_LAYOUT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as TrackLayoutNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
