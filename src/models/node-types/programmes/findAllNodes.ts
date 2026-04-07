import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {ProgrammeDataFacade} from "../../../data/ProgrammeDataFacade"
import {Programme} from "./types/Programme"
import {convertProgrammeNode} from "./convertProgrammeNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await ProgrammeDataFacade.getNodeCollection(params)

    const programmes: Programme[] = []

    nodes.forEach(node => {
        programmes.push(convertProgrammeNode(node))
    })

    return programmes.slice(0, nodeLimit)
}
