import type {Book} from "./types/Book"

export function getNodeSubTitle(node: Book) {
    const author = node.fields.author
    const year = node.fields.year_of_publication
    const pages = node.fields.pages

    const subtitleParts = []

    if (author) {
        subtitleParts.push(author)
    }

    if (year) {
        subtitleParts.push(year)
    }

    if (pages) {
        subtitleParts.push(`${pages} pages`)
    }

    return subtitleParts.join(' | ')
}
