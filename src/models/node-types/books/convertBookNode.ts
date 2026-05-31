import {BookNode} from "../../../data/node-types/books/types/BookNode"
import {Book} from "./types/Book"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertBookNode(dataNode: BookNode) {
    const book: Book = {
        type: ModelNodeType.BOOK,
        fields: {
            id: dataNode.data.id,
            title: dataNode.data.title,
            author: dataNode.data.author || null,
            publisher: dataNode.data.publisher || null,
            year_of_publication: dataNode.data.year_of_publication || null,
            isbn: dataNode.data.isbn || null,
            pages: dataNode.data.pages || null,
            language: dataNode.data.language || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return book
}
