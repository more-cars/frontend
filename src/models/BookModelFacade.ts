import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/books/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import type {Book} from "./node-types/books/types/Book"
import {getNodeTitle} from "./node-types/books/getNodeTitle"
import {findNodeById} from "./node-types/books/findNodeById"
import {getNodeSubTitle} from "./node-types/books/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/books/findConnectedMainImage"
import {findConnectedCarModelVariants} from "./node-types/books/findConnectedCarModelVariants"
import {findConnectedImages} from "./node-types/books/findConnectedImages"

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

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModelVariants(id: number) {
        return findConnectedCarModelVariants(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
