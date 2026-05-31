import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllBooks} from "./node-types/books/getAllBooks"

export const BookDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
        return getAllBooks(params)
    },
}
