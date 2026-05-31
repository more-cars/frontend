import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllBooks} from "./node-types/books/getAllBooks"
import {getBookById} from "./node-types/books/getBookById"

export const BookDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
        return getAllBooks(params)
    },

    async getNodeById(id: number) {
        return getBookById(id)
    },
}
