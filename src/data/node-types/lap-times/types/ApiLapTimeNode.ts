import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiLapTimeNode = {
    type: ApiNodeType.LAP_TIME
    id: number
    attributes: {
        time: string
        driver_name: string
        date?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
