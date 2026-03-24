import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRatingByMagazineIssueRelationship} from "./types/ApiRatingByMagazineIssueRelationship"
import {getRatingById} from "./getRatingById"
import type {RatingByMagazineIssueRelationship} from "./types/RatingByMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
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
        id,
        name: DataRelationshipType.RATING_BY_MAGAZINE_ISSUE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RATING,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as MagazineIssueNode,
        partner_node_type: DataNodeType.MAGAZINE_ISSUE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
