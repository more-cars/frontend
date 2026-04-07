import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {RatingDataFacade} from "../../../data/RatingDataFacade"
import {Rating} from "./types/Rating"
import {convertRatingNode} from "./convertRatingNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await RatingDataFacade.getNodeCollection(params)

    const ratings: Rating[] = []

    nodes.forEach(node => {
        ratings.push(convertRatingNode(node))
    })

    return ratings.slice(0, nodeLimit)
}
