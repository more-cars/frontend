import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelHasVideoRelationship} from "./types/ApiCarModelHasVideoRelationship"
import type {CarModelHasVideoRelationship} from "./types/CarModelHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/has-video`)).data as ApiCarModelHasVideoRelationship[]
    const data: CarModelHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.CAR_MODEL_HAS_VIDEO,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
