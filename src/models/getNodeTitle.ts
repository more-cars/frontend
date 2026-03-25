import type {ModelNode} from "./types/ModelNode"
import {ModelNodeType} from "./types/ModelNodeType"
import {CompanyModelFacade} from "./CompanyModelFacade"
import {BrandModelFacade} from "./BrandModelFacade"
import {CarModelModelFacade} from "./CarModelModelFacade"
import {CarModelVariantModelFacade} from "./CarModelVariantModelFacade"
import {PriceModelFacade} from "./PriceModelFacade"
import {RaceTrackModelFacade} from "./RaceTrackModelFacade"
import {TrackLayoutModelFacade} from "./TrackLayoutModelFacade"
import {RacingSeriesModelFacade} from "./RacingSeriesModelFacade"
import {RacingEventModelFacade} from "./RacingEventModelFacade"
import {RacingSessionModelFacade} from "./RacingSessionModelFacade"
import {SessionResultModelFacade} from "./SessionResultModelFacade"
import {LapTimeModelFacade} from "./LapTimeModelFacade"
import {RacingGameModelFacade} from "./RacingGameModelFacade"
import {GamingPlatformModelFacade} from "./GamingPlatformModelFacade"
import {ModelCarBrandModelFacade} from "./ModelCarBrandModelFacade"
import {ModelCarModelFacade} from "./ModelCarModelFacade"
import {MagazineModelFacade} from "./MagazineModelFacade"
import {MagazineIssueModelFacade} from "./MagazineIssueModelFacade"
import {RatingModelFacade} from "./RatingModelFacade"
import {ProgrammeEpisodeModelFacade} from "./ProgrammeEpisodeModelFacade"
import {ProgrammeModelFacade} from "./ProgrammeModelFacade"
import {MotorShowModelFacade} from "./MotorShowModelFacade"
import {ImageModelFacade} from "./ImageModelFacade"

export function getNodeTitle(node: ModelNode) {
    switch (node.type) {
        case ModelNodeType.COMPANY:
            return CompanyModelFacade.getNodeTitle(node)
        case ModelNodeType.BRAND:
            return BrandModelFacade.getNodeTitle(node)
        case ModelNodeType.CAR_MODEL:
            return CarModelModelFacade.getNodeTitle(node)
        case ModelNodeType.CAR_MODEL_VARIANT:
            return CarModelVariantModelFacade.getNodeTitle(node)
        case ModelNodeType.PRICE:
            return PriceModelFacade.getNodeTitle(node)
        case ModelNodeType.RACE_TRACK:
            return RaceTrackModelFacade.getNodeTitle(node)
        case ModelNodeType.TRACK_LAYOUT:
            return TrackLayoutModelFacade.getNodeTitle(node)
        case ModelNodeType.RACING_SERIES:
            return RacingSeriesModelFacade.getNodeTitle(node)
        case ModelNodeType.RACING_EVENT:
            return RacingEventModelFacade.getNodeTitle(node)
        case ModelNodeType.RACING_SESSION:
            return RacingSessionModelFacade.getNodeTitle(node)
        case ModelNodeType.SESSION_RESULT:
            return SessionResultModelFacade.getNodeTitle(node)
        case ModelNodeType.LAP_TIME:
            return LapTimeModelFacade.getNodeTitle(node)
        case ModelNodeType.RACING_GAME:
            return RacingGameModelFacade.getNodeTitle(node)
        case ModelNodeType.GAMING_PLATFORM:
            return GamingPlatformModelFacade.getNodeTitle(node)
        case ModelNodeType.MODEL_CAR:
            return ModelCarModelFacade.getNodeTitle(node)
        case ModelNodeType.MODEL_CAR_BRAND:
            return ModelCarBrandModelFacade.getNodeTitle(node)
        case ModelNodeType.MAGAZINE:
            return MagazineModelFacade.getNodeTitle(node)
        case ModelNodeType.MAGAZINE_ISSUE:
            return MagazineIssueModelFacade.getNodeTitle(node)
        case ModelNodeType.RATING:
            return RatingModelFacade.getNodeTitle(node)
        case ModelNodeType.PROGRAMME:
            return ProgrammeModelFacade.getNodeTitle(node)
        case ModelNodeType.PROGRAMME_EPISODE:
            return ProgrammeEpisodeModelFacade.getNodeTitle(node)
        case ModelNodeType.MOTOR_SHOW:
            return MotorShowModelFacade.getNodeTitle(node)
        case ModelNodeType.IMAGE:
            return ImageModelFacade.getNodeTitle(node)
    }
}
