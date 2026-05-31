import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllBooks} from "./node-types/books/getAllBooks"
import {getBookById} from "./node-types/books/getBookById"
import {getConnectedMainImage} from "./node-types/books/getConnectedMainImage"

export const BookDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
        return getAllBooks(params)
    },

    async getNodeById(id: number) {
        return getBookById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
