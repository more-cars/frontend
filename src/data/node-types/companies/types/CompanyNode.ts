import type {DataNodeType} from "../../../types/DataNodeType"

export type CompanyNode = {
    type: DataNodeType.COMPANY
    data: {
        id: number
        name: string
        founded?: number
        defunct?: number
        headquarters_location?: string
        legal_headquarters_location?: string
        created_at: string
        updated_at: string
    }
}
