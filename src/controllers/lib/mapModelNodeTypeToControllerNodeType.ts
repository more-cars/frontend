import {ModelNodeType} from "../../models/types/ModelNodeType"
import {ControllerNodeType} from "../types/ControllerNodeType"
import {NodeTypeNotFoundError} from "../types/NodeTypeNotFoundError"

export function mapApiNodeTypeToDataNodeType(modelNodeType: ModelNodeType) {
    const mapping = new Map<ModelNodeType, ControllerNodeType>([
        [ModelNodeType.COMPANY, ControllerNodeType.COMPANY],
        [ModelNodeType.BRAND, ControllerNodeType.BRAND],
        [ModelNodeType.CAR_MODEL, ControllerNodeType.CAR_MODEL],
        [ModelNodeType.CAR_MODEL_VARIANT, ControllerNodeType.CAR_MODEL_VARIANT],
        [ModelNodeType.PRICE, ControllerNodeType.PRICE],
        [ModelNodeType.RACE_TRACK, ControllerNodeType.RACE_TRACK],
        [ModelNodeType.TRACK_LAYOUT, ControllerNodeType.TRACK_LAYOUT],
        [ModelNodeType.RACING_SERIES, ControllerNodeType.RACING_SERIES],
        [ModelNodeType.RACING_EVENT, ControllerNodeType.RACING_EVENT],
        [ModelNodeType.RACING_SESSION, ControllerNodeType.RACING_SESSION],
        [ModelNodeType.SESSION_RESULT, ControllerNodeType.SESSION_RESULT],
        [ModelNodeType.LAP_TIME, ControllerNodeType.LAP_TIME],
        [ModelNodeType.RACING_GAME, ControllerNodeType.RACING_GAME],
        [ModelNodeType.GAMING_PLATFORM, ControllerNodeType.GAMING_PLATFORM],
        [ModelNodeType.MODEL_CAR, ControllerNodeType.MODEL_CAR],
        [ModelNodeType.MODEL_CAR_BRAND, ControllerNodeType.MODEL_CAR_BRAND],
        [ModelNodeType.MAGAZINE, ControllerNodeType.MAGAZINE],
        [ModelNodeType.MAGAZINE_ISSUE, ControllerNodeType.MAGAZINE_ISSUE],
        [ModelNodeType.RATING, ControllerNodeType.RATING],
        [ModelNodeType.PROGRAMME, ControllerNodeType.PROGRAMME],
        [ModelNodeType.PROGRAMME_EPISODE, ControllerNodeType.PROGRAMME_EPISODE],
        [ModelNodeType.MOTOR_SHOW, ControllerNodeType.MOTOR_SHOW],
        [ModelNodeType.IMAGE, ControllerNodeType.IMAGE],
    ])

    const mappedNodeType = mapping.get(modelNodeType)

    if (mappedNodeType === null || mappedNodeType === undefined) {
        throw new NodeTypeNotFoundError(modelNodeType)
    }

    return mappedNodeType
}
