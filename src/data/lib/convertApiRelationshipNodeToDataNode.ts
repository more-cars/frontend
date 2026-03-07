export function convertApiRelationshipNodeToDataNode(data: {
    [key: string]: string | number | boolean | null
    created_at: string
    updated_at: string
}) {
    return Object.assign({}, data, {id: data.id})
}
