import {DataNodeType} from "../../data/types/DataNodeType"
import type {DataNode} from "../../data/types/DataNode"
import {NodeTypeNotFoundError} from "../../data/types/NodeTypeNotFoundError"
import {convertCompanyNode} from "../node-types/companies/convertCompanyNode"
import type {CompanyNode} from "../../data/node-types/companies/types/CompanyNode"
import {convertBrandNode} from "../node-types/brands/convertBrandNode"
import type {BrandNode} from "../../data/node-types/brands/types/BrandNode"
import {convertCarModelNode} from "../node-types/car-models/convertCarModelNode"
import type {CarModelNode} from "../../data/node-types/car-models/types/CarModelNode"
import {convertCarModelVariantNode} from "../node-types/car-model-variants/convertCarModelVariantNode"
import type {CarModelVariantNode} from "../../data/node-types/car-model-variants/types/CarModelVariantNode"
import {convertPriceNode} from "../node-types/prices/convertPriceNode"
import type {PriceNode} from "../../data/node-types/prices/types/PriceNode"
import {convertRaceTrackNode} from "../node-types/race-tracks/convertRaceTrackNode"
import type {RaceTrackNode} from "../../data/node-types/race-tracks/types/RaceTrackNode"
import {convertTrackLayoutNode} from "../node-types/track-layouts/convertTrackLayoutNode"
import type {TrackLayoutNode} from "../../data/node-types/track-layouts/types/TrackLayoutNode"
import {convertRacingSeriesNode} from "../node-types/racing-series/convertRacingSeriesNode"
import type {RacingSeriesNode} from "../../data/node-types/racing-series/types/RacingSeriesNode"
import {convertRacingEventNode} from "../node-types/racing-events/convertRacingEventNode"
import type {RacingEventNode} from "../../data/node-types/racing-events/types/RacingEventNode"
import {convertRacingSessionNode} from "../node-types/racing-sessions/convertRacingSessionNode"
import type {RacingSessionNode} from "../../data/node-types/racing-sessions/types/RacingSessionNode"
import {convertSessionResultNode} from "../node-types/session-results/convertSessionResultNode"
import type {SessionResultNode} from "../../data/node-types/session-results/types/SessionResultNode"
import {convertLapTimeNode} from "../node-types/lap-times/convertLapTimeNode"
import type {LapTimeNode} from "../../data/node-types/lap-times/types/LapTimeNode"
import {convertRacingGameNode} from "../node-types/racing-games/convertRacingGameNode"
import type {RacingGameNode} from "../../data/node-types/racing-games/types/RacingGameNode"
import {convertGamingPlatformNode} from "../node-types/gaming-platforms/convertGamingPlatformNode"
import type {GamingPlatformNode} from "../../data/node-types/gaming-platforms/types/GamingPlatformNode"
import {convertModelCarNode} from "../node-types/model-cars/convertModelCarNode"
import type {ModelCarNode} from "../../data/node-types/model-cars/types/ModelCarNode"
import {convertModelCarBrandNode} from "../node-types/model-car-brands/convertModelCarBrandNode"
import type {ModelCarBrandNode} from "../../data/node-types/model-car-brands/types/ModelCarBrandNode"
import {convertMagazineNode} from "../node-types/magazines/convertMagazineNode"
import type {MagazineNode} from "../../data/node-types/magazines/types/MagazineNode"
import {convertMagazineIssueNode} from "../node-types/magazine-issues/convertMagazineIssueNode"
import type {MagazineIssueNode} from "../../data/node-types/magazine-issues/types/MagazineIssueNode"
import {convertRatingNode} from "../node-types/ratings/convertRatingNode"
import type {RatingNode} from "../../data/node-types/ratings/types/RatingNode"
import {convertProgrammeNode} from "../node-types/programmes/convertProgrammeNode"
import type {ProgrammeNode} from "../../data/node-types/programmes/types/ProgrammeNode"
import {convertProgrammeEpisodeNode} from "../node-types/programme-episodes/convertProgrammeEpisodeNode"
import type {ProgrammeEpisodeNode} from "../../data/node-types/programme-episodes/types/ProgrammeEpisodeNode"
import {convertMotorShowNode} from "../node-types/motor-shows/convertMotorShowNode"
import type {MotorShowNode} from "../../data/node-types/motor-shows/types/MotorShowNode"
import {convertImageNode} from "../node-types/images/convertImageNode"
import type {ImageNode} from "../../data/node-types/images/types/ImageNode"

export function convertDataNodeToModelNode(nodeType: DataNodeType, data: DataNode) {
    switch (nodeType) {
        case DataNodeType.COMPANY:
            return convertCompanyNode(data as CompanyNode)
        case DataNodeType.BRAND:
            return convertBrandNode(data as BrandNode)
        case DataNodeType.CAR_MODEL:
            return convertCarModelNode(data as CarModelNode)
        case DataNodeType.CAR_MODEL_VARIANT:
            return convertCarModelVariantNode(data as CarModelVariantNode)
        case DataNodeType.PRICE:
            return convertPriceNode(data as PriceNode)
        case DataNodeType.RACE_TRACK:
            return convertRaceTrackNode(data as RaceTrackNode)
        case DataNodeType.TRACK_LAYOUT:
            return convertTrackLayoutNode(data as TrackLayoutNode)
        case DataNodeType.RACING_SERIES:
            return convertRacingSeriesNode(data as RacingSeriesNode)
        case DataNodeType.RACING_EVENT:
            return convertRacingEventNode(data as RacingEventNode)
        case DataNodeType.RACING_SESSION:
            return convertRacingSessionNode(data as RacingSessionNode)
        case DataNodeType.SESSION_RESULT:
            return convertSessionResultNode(data as SessionResultNode)
        case DataNodeType.LAP_TIME:
            return convertLapTimeNode(data as LapTimeNode)
        case DataNodeType.RACING_GAME:
            return convertRacingGameNode(data as RacingGameNode)
        case DataNodeType.GAMING_PLATFORM:
            return convertGamingPlatformNode(data as GamingPlatformNode)
        case DataNodeType.MODEL_CAR:
            return convertModelCarNode(data as ModelCarNode)
        case DataNodeType.MODEL_CAR_BRAND:
            return convertModelCarBrandNode(data as ModelCarBrandNode)
        case DataNodeType.MAGAZINE:
            return convertMagazineNode(data as MagazineNode)
        case DataNodeType.MAGAZINE_ISSUE:
            return convertMagazineIssueNode(data as MagazineIssueNode)
        case DataNodeType.RATING:
            return convertRatingNode(data as RatingNode)
        case DataNodeType.PROGRAMME:
            return convertProgrammeNode(data as ProgrammeNode)
        case DataNodeType.PROGRAMME_EPISODE:
            return convertProgrammeEpisodeNode(data as ProgrammeEpisodeNode)
        case DataNodeType.MOTOR_SHOW:
            return convertMotorShowNode(data as MotorShowNode)
        case DataNodeType.IMAGE:
            return convertImageNode(data as ImageNode)
        default:
            throw new NodeTypeNotFoundError(nodeType)
    }
}
