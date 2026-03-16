import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiProgrammeNode} from "./types/ApiProgrammeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ProgrammeNode} from "./types/ProgrammeNode"

export async function getProgrammeById(id: number) {
    const apiData = (await requestDataFromApi(`/programmes/${id}`)) as ApiProgrammeNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as ProgrammeNode
}
