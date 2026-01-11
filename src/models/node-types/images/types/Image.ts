export type Image = {
    id: number

    image_provider: string
    external_id: string

    name: string,
    description?: string,
    creator: string,
    license: string,
    tags?: string,
    source: string,
    image_url_original: string,
    image_url_xxl?: string,
    image_url_xl?: string,
    image_url_l?: string,
    image_url_m?: string,
    image_url_s?: string,
    image_url_xs?: string,

    created_at: string
    updated_at: string
}
