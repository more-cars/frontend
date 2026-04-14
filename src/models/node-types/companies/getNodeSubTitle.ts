import type {Company} from "./types/Company"

export function getNodeSubTitle(node: Company) {
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
