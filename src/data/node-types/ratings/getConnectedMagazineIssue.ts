import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRatingByMagazineIssueRelationship} from "./types/ApiRatingByMagazineIssueRelationship"
import {getRatingById} from "./getRatingById"
import type {RatingByMagazineIssueRelationship} from "./types/RatingByMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssue(id: number) {
    const sourceNode = await getRatingById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/ratings/${id}/by-magazine-issue`)) as ApiRatingByMagazineIssueRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RatingByMagazineIssueRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RATING_BY_MAGAZINE_ISSUE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as MagazineIssueNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
