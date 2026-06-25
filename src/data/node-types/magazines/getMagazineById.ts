import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiMagazineNode} from "./types/ApiMagazineNode"
import type {MagazineNode} from "./types/MagazineNode"

export async function getMagazineById(id: number) {
    const apiData = (await requestDataFromApi(`/magazines/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiMagazineNode) as MagazineNode
}
