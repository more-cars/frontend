import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {ProgrammeEpisodeDataFacade} from "../../../data/ProgrammeEpisodeDataFacade"
import {ProgrammeEpisode} from "./types/ProgrammeEpisode"
import {convertProgrammeEpisodeNode} from "./convertProgrammeEpisodeNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await ProgrammeEpisodeDataFacade.getNodeCollection(params)

    const programmeEpisodes: ProgrammeEpisode[] = []

    nodes.forEach(node => {
        programmeEpisodes.push(convertProgrammeEpisodeNode(node))
    })

    return programmeEpisodes.slice(0, nodeLimit)
}
