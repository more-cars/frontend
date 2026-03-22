import urlSlug from "url-slug"

export function canonicalUrlPath(nodeId: number, title: string | number | undefined) {
    if (title === undefined) {
        return urlSlug(`/${nodeId}`)
    }

    if (typeof title === "number") {
        return urlSlug(`${title} ${nodeId}`)
    }

    return urlSlug(`${title.toLowerCase()} ${nodeId}`)
}
