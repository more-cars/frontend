import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {MotorShow} from "../motor-shows/types/MotorShow"
import {convertMotorShowNode} from "../motor-shows/convertMotorShowNode"

export async function findConnectedMotorShows(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedMotorShowNodes(id)
    const motorShows: MotorShow[] = []

    for (const relation of relations) {
        motorShows.push(convertMotorShowNode(relation.partner_node))
    }

    return [...motorShows].sort((a, b) => (a.name + "").localeCompare(b.name + ""))
}
