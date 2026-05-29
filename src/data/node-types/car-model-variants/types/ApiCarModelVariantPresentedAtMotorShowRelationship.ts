import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMotorShowNode} from "../../motor-shows/types/ApiMotorShowNode"

export type ApiCarModelVariantPresentedAtMotorShowRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL_VARIANT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_PRESENTED_AT_MOTOR_SHOW
            partner_node: {
                node_type: ApiNodeType.MOTOR_SHOW
                data: ApiMotorShowNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
