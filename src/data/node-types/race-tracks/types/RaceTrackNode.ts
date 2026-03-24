import type {DataNodeType} from "../../../types/DataNodeType"

export type RaceTrackNode = {
    type: DataNodeType.RACE_TRACK
    data: {
        id: number
        name: string
        opened?: number
        closed?: number
        type?: string
        location?: string
        geo_position?: string
        created_at: string
        updated_at: string
    }
}
