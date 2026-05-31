import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/books/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import type {Book} from "./node-types/books/types/Book"
import {getNodeTitle} from "./node-types/books/getNodeTitle"
import {findNodeById} from "./node-types/books/findNodeById"
import {getNodeSubTitle} from "./node-types/books/getNodeSubTitle"

export const BookModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.BOOK)
    },

    getNodeTitle(node: Book) {
        return getNodeTitle(node)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeSubTitle(node: Book) {
        return getNodeSubTitle(node)
    },
}
