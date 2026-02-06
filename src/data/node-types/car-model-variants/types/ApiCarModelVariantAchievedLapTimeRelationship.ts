import type {ApiLapTimeNode} from "../../lap-times/types/ApiLapTimeNode"

export type ApiCarModelVariantAchievedLapTimeRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'achieved-lap-time'
        relationship_partner: {
            node_type: 'lap time'
            data: ApiLapTimeNode['data']
        }
        created_at: string
        updated_at: string
    }
}
