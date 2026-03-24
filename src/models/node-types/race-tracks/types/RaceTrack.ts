import {ModelNodeType} from "../../../types/ModelNodeType"

export type RaceTrack = {
    type: ModelNodeType.RACE_TRACK
    fields: {
        id: number
        name: string
        opened: number | null
        closed: number | null
        type: string | null
        location: string | null
        geo_position: string | null
        created_at: string
        updated_at: string
    }
}
