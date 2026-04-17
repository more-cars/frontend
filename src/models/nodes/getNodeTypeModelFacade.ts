import type {ModelNode} from "../types/ModelNode"
import {ModelNodeType} from "../types/ModelNodeType"
import {CompanyModelFacade} from "../CompanyModelFacade"
import {BrandModelFacade} from "../BrandModelFacade"
import {CarModelModelFacade} from "../CarModelModelFacade"
import {CarModelVariantModelFacade} from "../CarModelVariantModelFacade"
import {PriceModelFacade} from "../PriceModelFacade"
import {RaceTrackModelFacade} from "../RaceTrackModelFacade"
import {TrackLayoutModelFacade} from "../TrackLayoutModelFacade"
import {RacingSeriesModelFacade} from "../RacingSeriesModelFacade"
import {RacingEventModelFacade} from "../RacingEventModelFacade"
import {RacingSessionModelFacade} from "../RacingSessionModelFacade"
import {SessionResultModelFacade} from "../SessionResultModelFacade"
import {LapTimeModelFacade} from "../LapTimeModelFacade"
import {RacingGameModelFacade} from "../RacingGameModelFacade"
import {GamingPlatformModelFacade} from "../GamingPlatformModelFacade"
import {ModelCarModelFacade} from "../ModelCarModelFacade"
import {ModelCarBrandModelFacade} from "../ModelCarBrandModelFacade"
import {MagazineModelFacade} from "../MagazineModelFacade"
import {MagazineIssueModelFacade} from "../MagazineIssueModelFacade"
import {RatingModelFacade} from "../RatingModelFacade"
import {ProgrammeModelFacade} from "../ProgrammeModelFacade"
import {ProgrammeEpisodeModelFacade} from "../ProgrammeEpisodeModelFacade"
import {MotorShowModelFacade} from "../MotorShowModelFacade"
import {ImageModelFacade} from "../ImageModelFacade"
import {VideoModelFacade} from "../VideoModelFacade"

type ModelFacade = {
    getNodeTitle: (node: ModelNode) => string
}

export function getNodeTypeModelFacade(nodeType: ModelNodeType) {
    const mapping = new Map<ModelNodeType, ModelFacade>([
        [ModelNodeType.COMPANY, CompanyModelFacade as ModelFacade],
        [ModelNodeType.BRAND, BrandModelFacade as ModelFacade],
        [ModelNodeType.CAR_MODEL, CarModelModelFacade as ModelFacade],
        [ModelNodeType.CAR_MODEL_VARIANT, CarModelVariantModelFacade as ModelFacade],
        [ModelNodeType.PRICE, PriceModelFacade as ModelFacade],
        [ModelNodeType.RACE_TRACK, RaceTrackModelFacade as ModelFacade],
        [ModelNodeType.TRACK_LAYOUT, TrackLayoutModelFacade as ModelFacade],
        [ModelNodeType.RACING_SERIES, RacingSeriesModelFacade as ModelFacade],
        [ModelNodeType.RACING_EVENT, RacingEventModelFacade as ModelFacade],
        [ModelNodeType.RACING_SESSION, RacingSessionModelFacade as ModelFacade],
        [ModelNodeType.SESSION_RESULT, SessionResultModelFacade as ModelFacade],
        [ModelNodeType.LAP_TIME, LapTimeModelFacade as ModelFacade],
        [ModelNodeType.RACING_GAME, RacingGameModelFacade as ModelFacade],
        [ModelNodeType.GAMING_PLATFORM, GamingPlatformModelFacade as ModelFacade],
        [ModelNodeType.MODEL_CAR, ModelCarModelFacade as ModelFacade],
        [ModelNodeType.MODEL_CAR_BRAND, ModelCarBrandModelFacade as ModelFacade],
        [ModelNodeType.MAGAZINE, MagazineModelFacade as ModelFacade],
        [ModelNodeType.MAGAZINE_ISSUE, MagazineIssueModelFacade as ModelFacade],
        [ModelNodeType.RATING, RatingModelFacade as ModelFacade],
        [ModelNodeType.PROGRAMME, ProgrammeModelFacade as ModelFacade],
        [ModelNodeType.PROGRAMME_EPISODE, ProgrammeEpisodeModelFacade as ModelFacade],
        [ModelNodeType.MOTOR_SHOW, MotorShowModelFacade as ModelFacade],
        [ModelNodeType.IMAGE, ImageModelFacade as ModelFacade],
        [ModelNodeType.VIDEO, VideoModelFacade as ModelFacade],
    ])

    const facade = mapping.get(nodeType)

    if (!facade) {
        throw new Error(`No facade found for node type "${nodeType}"`)
    }

    return facade
}
