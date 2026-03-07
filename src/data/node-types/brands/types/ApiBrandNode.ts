export type ApiBrandNode = {
    type: 'brands'
    id: number
    attributes: {
        name: string
        full_name?: string
        founded?: number
        defunct?: number
        wmi?: string
        hsn?: string
        created_at: string
        updated_at: string
    }
}
