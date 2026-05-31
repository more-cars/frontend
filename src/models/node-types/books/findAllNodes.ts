import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {BookDataFacade} from "../../../data/BookDataFacade"
import {Book} from "./types/Book"
import {convertBookNode} from "./convertBookNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await BookDataFacade.getNodeCollection(params)

    const books: Book[] = []

    nodes.forEach(node => {
        books.push(convertBookNode(node))
    })

    return books.slice(0, nodeLimit)
}
