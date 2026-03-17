import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantReviewedByMagazineIssueWithRatingRelationship} from "./types/ApiCarModelVariantReviewedByMagazineIssueWithRatingRelationship"
import type {CarModelVariantReviewedByMagazineIssueWithRatingRelationship} from "./types/CarModelVariantReviewedByMagazineIssueWithRatingRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RatingNode} from "../ratings/types/RatingNode"

export async function getConnectedRatings(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/reviewed-by-magazine-issue-with-rating`)).data as ApiCarModelVariantReviewedByMagazineIssueWithRatingRelationship[]
    const data: CarModelVariantReviewedByMagazineIssueWithRatingRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_REVIEWED_BY_MAGAZINE_ISSUE_WITH_RATING,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as RatingNode,
            partner_node_type: DataNodeType.RATING,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
