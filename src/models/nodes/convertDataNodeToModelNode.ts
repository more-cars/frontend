import {DataNodeType} from "../../data/types/DataNodeType"
import type {DataNode} from "../../data/types/DataNode"
import {convertCompanyNode} from "../node-types/companies/convertCompanyNode"
import {convertBrandNode} from "../node-types/brands/convertBrandNode"
import {convertCarModelNode} from "../node-types/car-models/convertCarModelNode"
import {convertCarModelVariantNode} from "../node-types/car-model-variants/convertCarModelVariantNode"
import {convertPriceNode} from "../node-types/prices/convertPriceNode"
import {convertRaceTrackNode} from "../node-types/race-tracks/convertRaceTrackNode"
import {convertTrackLayoutNode} from "../node-types/track-layouts/convertTrackLayoutNode"
import {convertRacingSeriesNode} from "../node-types/racing-series/convertRacingSeriesNode"
import {convertRacingEventNode} from "../node-types/racing-events/convertRacingEventNode"
import {convertRacingSessionNode} from "../node-types/racing-sessions/convertRacingSessionNode"
import {convertSessionResultNode} from "../node-types/session-results/convertSessionResultNode"
import {convertLapTimeNode} from "../node-types/lap-times/convertLapTimeNode"
import {convertRacingGameNode} from "../node-types/racing-games/convertRacingGameNode"
import {convertGamingPlatformNode} from "../node-types/gaming-platforms/convertGamingPlatformNode"
import {convertModelCarNode} from "../node-types/model-cars/convertModelCarNode"
import {convertModelCarBrandNode} from "../node-types/model-car-brands/convertModelCarBrandNode"
import {convertMagazineNode} from "../node-types/magazines/convertMagazineNode"
import {convertMagazineIssueNode} from "../node-types/magazine-issues/convertMagazineIssueNode"
import {convertRatingNode} from "../node-types/ratings/convertRatingNode"
import {convertProgrammeNode} from "../node-types/programmes/convertProgrammeNode"
import {convertProgrammeEpisodeNode} from "../node-types/programme-episodes/convertProgrammeEpisodeNode"
import {convertMotorShowNode} from "../node-types/motor-shows/convertMotorShowNode"
import {convertImageNode} from "../node-types/images/convertImageNode"

export function convertDataNodeToModelNode(node: DataNode) {
    switch (node.type) {
        case DataNodeType.COMPANY:
            return convertCompanyNode(node)
        case DataNodeType.BRAND:
            return convertBrandNode(node)
        case DataNodeType.CAR_MODEL:
            return convertCarModelNode(node)
        case DataNodeType.CAR_MODEL_VARIANT:
            return convertCarModelVariantNode(node)
        case DataNodeType.PRICE:
            return convertPriceNode(node)
        case DataNodeType.RACE_TRACK:
            return convertRaceTrackNode(node)
        case DataNodeType.TRACK_LAYOUT:
            return convertTrackLayoutNode(node)
        case DataNodeType.RACING_SERIES:
            return convertRacingSeriesNode(node)
        case DataNodeType.RACING_EVENT:
            return convertRacingEventNode(node)
        case DataNodeType.RACING_SESSION:
            return convertRacingSessionNode(node)
        case DataNodeType.SESSION_RESULT:
            return convertSessionResultNode(node)
        case DataNodeType.LAP_TIME:
            return convertLapTimeNode(node)
        case DataNodeType.RACING_GAME:
            return convertRacingGameNode(node)
        case DataNodeType.GAMING_PLATFORM:
            return convertGamingPlatformNode(node)
        case DataNodeType.MODEL_CAR:
            return convertModelCarNode(node)
        case DataNodeType.MODEL_CAR_BRAND:
            return convertModelCarBrandNode(node)
        case DataNodeType.MAGAZINE:
            return convertMagazineNode(node)
        case DataNodeType.MAGAZINE_ISSUE:
            return convertMagazineIssueNode(node)
        case DataNodeType.RATING:
            return convertRatingNode(node)
        case DataNodeType.PROGRAMME:
            return convertProgrammeNode(node)
        case DataNodeType.PROGRAMME_EPISODE:
            return convertProgrammeEpisodeNode(node)
        case DataNodeType.MOTOR_SHOW:
            return convertMotorShowNode(node)
        case DataNodeType.IMAGE:
            return convertImageNode(node)
    }
}
