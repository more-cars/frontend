import {ApiNodeType} from "../types/ApiNodeType"
import {DataNodeType} from "../types/DataNodeType"
import {NodeTypeNotFoundError} from "../types/NodeTypeNotFoundError"

export function mapApiNodeTypeToDataNodeType(apiNodeType: ApiNodeType) {
    const mapping = new Map<ApiNodeType, DataNodeType>([
        [ApiNodeType.COMPANY, DataNodeType.COMPANY],
        [ApiNodeType.BRAND, DataNodeType.BRAND],
        [ApiNodeType.CAR_MODEL, DataNodeType.CAR_MODEL],
        [ApiNodeType.CAR_MODEL_VARIANT, DataNodeType.CAR_MODEL_VARIANT],
        [ApiNodeType.PRICE, DataNodeType.PRICE],
        [ApiNodeType.RACE_TRACK, DataNodeType.RACE_TRACK],
        [ApiNodeType.TRACK_LAYOUT, DataNodeType.TRACK_LAYOUT],
        [ApiNodeType.RACING_SERIES, DataNodeType.RACING_SERIES],
        [ApiNodeType.RACING_EVENT, DataNodeType.RACING_EVENT],
        [ApiNodeType.RACING_SESSION, DataNodeType.RACING_SESSION],
        [ApiNodeType.SESSION_RESULT, DataNodeType.SESSION_RESULT],
        [ApiNodeType.LAP_TIME, DataNodeType.LAP_TIME],
        [ApiNodeType.RACING_GAME, DataNodeType.RACING_GAME],
        [ApiNodeType.GAMING_PLATFORM, DataNodeType.GAMING_PLATFORM],
        [ApiNodeType.MODEL_CAR, DataNodeType.MODEL_CAR],
        [ApiNodeType.MODEL_CAR_BRAND, DataNodeType.MODEL_CAR_BRAND],
        [ApiNodeType.MAGAZINE, DataNodeType.MAGAZINE],
        [ApiNodeType.MAGAZINE_ISSUE, DataNodeType.MAGAZINE_ISSUE],
        [ApiNodeType.RATING, DataNodeType.RATING],
        [ApiNodeType.PROGRAMME, DataNodeType.PROGRAMME],
        [ApiNodeType.PROGRAMME_EPISODE, DataNodeType.PROGRAMME_EPISODE],
        [ApiNodeType.MOTOR_SHOW, DataNodeType.MOTOR_SHOW],
        [ApiNodeType.VIDEO, DataNodeType.VIDEO],
        [ApiNodeType.IMAGE, DataNodeType.IMAGE],
    ])

    const mappedNodeType = mapping.get(apiNodeType)

    if (mappedNodeType === null || mappedNodeType === undefined) {
        throw new NodeTypeNotFoundError(apiNodeType)
    }

    return mappedNodeType
}
