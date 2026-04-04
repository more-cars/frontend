import {DataNodeType} from "../../types/DataNodeType"

export type Node = {
    type: DataNodeType
    data: {
        id: number
        [key: string]: string | number | boolean | null
        created_at: string
        updated_at: string
    }
}
