import {RaceTrackDataFacade} from "../../../data/RaceTrackDataFacade"
import {RaceTrack} from "./types/RaceTrack"
import {convertRaceTrackNode} from "./convertRaceTrackNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await RaceTrackDataFacade.getNodeCollection(params)

    const raceTracks: RaceTrack[] = []

    nodes.forEach(node => {
        raceTracks.push(convertRaceTrackNode(node))
    })

    return raceTracks.slice(0, nodeLimit)
}
