import {ControllerNodeType} from "../../controllers/types/ControllerNodeType"

export function getNodeTypeIcon(nodeType: ControllerNodeType) {
    const map = new Map<ControllerNodeType, string>([
        [ControllerNodeType.COMPANY, '🏭'],
        [ControllerNodeType.BRAND, '🛡️'],
        [ControllerNodeType.CAR_MODEL, '🚗️'],
        [ControllerNodeType.CAR_MODEL_VARIANT, '🚙'],
        [ControllerNodeType.RACE_TRACK, '🛣️'],
        [ControllerNodeType.TRACK_LAYOUT, '⭖'],
        [ControllerNodeType.RACING_SERIES, '🏎️'],
        [ControllerNodeType.RACING_EVENT, '🏞'],
        [ControllerNodeType.RACING_SESSION, '🚦'],
        [ControllerNodeType.SESSION_RESULT, '🏁'],
        [ControllerNodeType.LAP_TIME, '⏱️'],
        [ControllerNodeType.RACING_GAME, '🎮'],
        [ControllerNodeType.GAMING_PLATFORM, '🖥️'],
        [ControllerNodeType.MODEL_CAR, '🚘'],
        [ControllerNodeType.MODEL_CAR_BRAND, '🐉'],
        [ControllerNodeType.MAGAZINE, '📰'],
        [ControllerNodeType.MAGAZINE_ISSUE, '🗞️'],
        [ControllerNodeType.RATING, '💯'],
        [ControllerNodeType.PROGRAMME, '📺'],
        [ControllerNodeType.PROGRAMME_EPISODE, '🎬️'],
        [ControllerNodeType.MOTOR_SHOW, '🎪'],
        [ControllerNodeType.IMAGE, '🖼️'],
    ])

    return map.get(nodeType)
}
