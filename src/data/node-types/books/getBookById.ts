import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBookNode} from "./types/ApiBookNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {BookNode} from "./types/BookNode"

export async function getBookById(id: number) {
    const apiData = (await requestDataFromApi(`/books/${id}`)) as ApiBookNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as BookNode
}
