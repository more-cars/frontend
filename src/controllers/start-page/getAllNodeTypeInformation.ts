import {ControllerNodeType} from "../types/ControllerNodeType"
import type {NodeTypeInformation} from "../types/NodeTypeInformation"
import {getNodeTypeInformation} from "./getNodeTypeInformation"
import {DataNodeType} from "../../data/types/DataNodeType"
import {CompanyModelFacade} from "../../models/CompanyModelFacade"
import {BrandModelFacade} from "../../models/BrandModelFacade"
import {CarModelModelFacade} from "../../models/CarModelModelFacade"
import {CarModelVariantModelFacade} from "../../models/CarModelVariantModelFacade"
import {PriceModelFacade} from "../../models/PriceModelFacade"
import {RaceTrackModelFacade} from "../../models/RaceTrackModelFacade"
import {TrackLayoutModelFacade} from "../../models/TrackLayoutModelFacade"
import {RacingSeriesModelFacade} from "../../models/RacingSeriesModelFacade"
import {RacingEventModelFacade} from "../../models/RacingEventModelFacade"
import {RacingSessionModelFacade} from "../../models/RacingSessionModelFacade"
import {SessionResultModelFacade} from "../../models/SessionResultModelFacade"
import {LapTimeModelFacade} from "../../models/LapTimeModelFacade"
import {RacingGameModelFacade} from "../../models/RacingGameModelFacade"
import {GamingPlatformModelFacade} from "../../models/GamingPlatformModelFacade"
import {ModelCarModelFacade} from "../../models/ModelCarModelFacade"
import {ModelCarBrandModelFacade} from "../../models/ModelCarBrandModelFacade"
import {MagazineModelFacade} from "../../models/MagazineModelFacade"
import {MagazineIssueModelFacade} from "../../models/MagazineIssueModelFacade"
import {RatingModelFacade} from "../../models/RatingModelFacade"
import {ProgrammeModelFacade} from "../../models/ProgrammeModelFacade"
import {ProgrammeEpisodeModelFacade} from "../../models/ProgrammeEpisodeModelFacade"
import {MotorShowModelFacade} from "../../models/MotorShowModelFacade"
import {VideoModelFacade} from "../../models/VideoModelFacade"
import {ImageModelFacade} from "../../models/ImageModelFacade"

export async function getAllNodeTypeInformation() {
    return new Map<ControllerNodeType, NodeTypeInformation>([
        [ControllerNodeType.COMPANY, getNodeTypeInformation(DataNodeType.COMPANY, await CompanyModelFacade.getTotalNodeCount())],
        [ControllerNodeType.BRAND, getNodeTypeInformation(DataNodeType.BRAND, await BrandModelFacade.getTotalNodeCount())],
        [ControllerNodeType.CAR_MODEL, getNodeTypeInformation(DataNodeType.CAR_MODEL, await CarModelModelFacade.getTotalNodeCount())],
        [ControllerNodeType.CAR_MODEL_VARIANT, getNodeTypeInformation(DataNodeType.CAR_MODEL_VARIANT, await CarModelVariantModelFacade.getTotalNodeCount())],
        [ControllerNodeType.PRICE, getNodeTypeInformation(DataNodeType.PRICE, await PriceModelFacade.getTotalNodeCount())],
        [ControllerNodeType.RACE_TRACK, getNodeTypeInformation(DataNodeType.RACE_TRACK, await RaceTrackModelFacade.getTotalNodeCount())],
        [ControllerNodeType.TRACK_LAYOUT, getNodeTypeInformation(DataNodeType.TRACK_LAYOUT, await TrackLayoutModelFacade.getTotalNodeCount())],
        [ControllerNodeType.RACING_SERIES, getNodeTypeInformation(DataNodeType.RACING_SERIES, await RacingSeriesModelFacade.getTotalNodeCount())],
        [ControllerNodeType.RACING_EVENT, getNodeTypeInformation(DataNodeType.RACING_EVENT, await RacingEventModelFacade.getTotalNodeCount())],
        [ControllerNodeType.RACING_SESSION, getNodeTypeInformation(DataNodeType.RACING_SESSION, await RacingSessionModelFacade.getTotalNodeCount())],
        [ControllerNodeType.SESSION_RESULT, getNodeTypeInformation(DataNodeType.SESSION_RESULT, await SessionResultModelFacade.getTotalNodeCount())],
        [ControllerNodeType.LAP_TIME, getNodeTypeInformation(DataNodeType.LAP_TIME, await LapTimeModelFacade.getTotalNodeCount())],
        [ControllerNodeType.RACING_GAME, getNodeTypeInformation(DataNodeType.RACING_GAME, await RacingGameModelFacade.getTotalNodeCount())],
        [ControllerNodeType.GAMING_PLATFORM, getNodeTypeInformation(DataNodeType.GAMING_PLATFORM, await GamingPlatformModelFacade.getTotalNodeCount())],
        [ControllerNodeType.MODEL_CAR, getNodeTypeInformation(DataNodeType.MODEL_CAR, await ModelCarModelFacade.getTotalNodeCount())],
        [ControllerNodeType.MODEL_CAR_BRAND, getNodeTypeInformation(DataNodeType.MODEL_CAR_BRAND, await ModelCarBrandModelFacade.getTotalNodeCount())],
        [ControllerNodeType.MAGAZINE, getNodeTypeInformation(DataNodeType.MAGAZINE, await MagazineModelFacade.getTotalNodeCount())],
        [ControllerNodeType.MAGAZINE_ISSUE, getNodeTypeInformation(DataNodeType.MAGAZINE_ISSUE, await MagazineIssueModelFacade.getTotalNodeCount())],
        [ControllerNodeType.RATING, getNodeTypeInformation(DataNodeType.RATING, await RatingModelFacade.getTotalNodeCount())],
        [ControllerNodeType.PROGRAMME, getNodeTypeInformation(DataNodeType.PROGRAMME, await ProgrammeModelFacade.getTotalNodeCount())],
        [ControllerNodeType.PROGRAMME_EPISODE, getNodeTypeInformation(DataNodeType.PROGRAMME_EPISODE, await ProgrammeEpisodeModelFacade.getTotalNodeCount())],
        [ControllerNodeType.MOTOR_SHOW, getNodeTypeInformation(DataNodeType.MOTOR_SHOW, await MotorShowModelFacade.getTotalNodeCount())],
        [ControllerNodeType.VIDEO, getNodeTypeInformation(DataNodeType.VIDEO, await VideoModelFacade.getTotalNodeCount())],
        [ControllerNodeType.IMAGE, getNodeTypeInformation(DataNodeType.IMAGE, await ImageModelFacade.getTotalNodeCount())],
    ])
}