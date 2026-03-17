export type ApiMotorShowNode = {
    type: string
    id: number
    attributes: {
        name: string
        date_from?: string
        date_until?: string
        location?: string
        target_audience?: string
        focus?: string
        created_at: string
        updated_at: string
    }
}
