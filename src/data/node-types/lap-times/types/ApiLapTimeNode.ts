export type ApiLapTimeNode = {
    type: 'lap-times'
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
