import type {Brand} from "./types/Brand"

export function getNodeSubTitle(node: Brand) {
    const founded = node.fields.founded
    const defunct = node.fields.defunct

    if (founded && defunct) {
        return `${founded} - ${defunct}`
    }

    if (founded && !defunct) {
        return `since ${founded}`
    }

    if (!founded && defunct) {
        return `until ${defunct}`
    }

    return ''
}
