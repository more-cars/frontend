import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {ApiMagazineIssueReviewedCarModelVariantWithRatingRelationship} from "./types/ApiMagazineIssueReviewedCarModelVariantWithRatingRelationship"
import type {MagazineIssueReviewedCarModelVariantWithRatingRelationship} from "./types/MagazineIssueReviewedCarModelVariantWithRatingRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RatingNode} from "../ratings/types/RatingNode"

export async function getConnectedRatings(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/reviewed-car-model-variant-with-rating`)).data as ApiMagazineIssueReviewedCarModelVariantWithRatingRelationship[]
    const data: MagazineIssueReviewedCarModelVariantWithRatingRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_ISSUE_REVIEWED_CAR_MODEL_VARIANT_WITH_RATING,
            source_node: sourceNode,
            source_node_type: DataNodeType.MAGAZINE_ISSUE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RatingNode,
            partner_node_type: DataNodeType.RATING,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
