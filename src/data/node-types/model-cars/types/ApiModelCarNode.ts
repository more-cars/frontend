export type ApiModelCarNode = {
    type: string
    id: number
    attributes: {
        name: string
        product_code?: string
        release_year?: number
        scale?: string
        series?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
