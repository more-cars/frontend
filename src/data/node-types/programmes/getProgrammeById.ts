import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiProgrammeNode} from "./types/ApiProgrammeNode"
import type {ProgrammeNode} from "./types/ProgrammeNode"

export async function getProgrammeById(id: number) {
    const apiData = (await requestDataFromApi(`/programmes/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiProgrammeNode) as ProgrammeNode
}
