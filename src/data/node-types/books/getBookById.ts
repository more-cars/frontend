import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiBookNode} from "./types/ApiBookNode"
import type {BookNode} from "./types/BookNode"

export async function getBookById(id: number) {
    const apiData = (await requestDataFromApi(`/books/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiBookNode) as BookNode
}
