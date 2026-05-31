import type {Book} from "./types/Book"

export function getNodeTitle(node: Book) {
    return `${node.fields.title}`
}
