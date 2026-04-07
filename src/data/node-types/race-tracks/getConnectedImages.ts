import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHasImageRelationship} from "./types/ApiRaceTrackHasImageRelationship"
import type {RaceTrackHasImageRelationship} from "./types/RaceTrackHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRaceTrackById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/race-tracks/${id}/has-image`)).data as ApiRaceTrackHasImageRelationship[]
    const data: RaceTrackHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACE_TRACK_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
