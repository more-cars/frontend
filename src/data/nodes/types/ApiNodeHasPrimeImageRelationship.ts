import {ApiRelationshipType} from "../../types/ApiRelationshipType"
import {ApiNodeType} from "../../types/ApiNodeType"
import type {ApiNode} from "./ApiNode"
import type {ApiImageNode} from "../../node-types/images/types/ApiImageNode"

export type ApiNodeHasPrimeImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.NODE_HAS_PRIME_IMAGE
        start_node: {
            node_type: ApiNodeType
            data: ApiNode['attributes']
        }
        partner_node: {
            node_type: ApiNodeType.IMAGE
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
