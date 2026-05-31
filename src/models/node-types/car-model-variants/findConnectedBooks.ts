import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {Book} from "../books/types/Book"
import {convertBookNode} from "../books/convertBookNode"

export async function findConnectedBooks(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedBookNodes(id)
    const books: Book[] = []

    for (const relation of relations) {
        books.push(convertBookNode(relation.partner_node))
    }

    return [...books].sort((a, b) => (a.fields.title + "").localeCompare(b.fields.title + ""))
}
