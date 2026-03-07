export function convertApiNodeToDataNode(data: {
    [key: string]: string | number | boolean | null
    created_at: string
    updated_at: string
}, id: number) {
    return Object.assign({}, data, {id: id})
}
