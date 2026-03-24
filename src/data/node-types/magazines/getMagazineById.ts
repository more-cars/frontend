import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineNode} from "./types/ApiMagazineNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {MagazineNode} from "./types/MagazineNode"

export async function getMagazineById(id: number) {
    const apiData = (await requestDataFromApi(`/magazines/${id}`)) as ApiMagazineNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as MagazineNode
}
