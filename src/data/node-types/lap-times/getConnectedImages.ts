import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasImageRelationship} from "./types/ApiLapTimeHasImageRelationship"
import type {LapTimeHasImageRelationship} from "./types/LapTimeHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/has-image`)).data as ApiLapTimeHasImageRelationship[]
    const data: LapTimeHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.LAP_TIME_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.LAP_TIME,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
