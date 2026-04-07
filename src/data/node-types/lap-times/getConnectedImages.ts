import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasImageRelationship} from "./types/ApiLapTimeHasImageRelationship"
import type {LapTimeHasImageRelationship} from "./types/LapTimeHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/has-image`)).data as ApiLapTimeHasImageRelationship[]
    const data: LapTimeHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.LAP_TIME_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
