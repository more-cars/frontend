import type {Company} from "../node-types/companies/types/Company"
import type {Brand} from "../node-types/brands/types/Brand"
import type {CarModel} from "../node-types/car-models/types/CarModel"
import type {CarModelVariant} from "../node-types/car-model-variants/types/CarModelVariant"
import type {Price} from "../node-types/prices/types/Price"
import type {RaceTrack} from "../node-types/race-tracks/types/RaceTrack"
import type {TrackLayout} from "../node-types/track-layouts/types/TrackLayout"
import type {RacingSeries} from "../node-types/racing-series/types/RacingSeries"
import type {RacingEvent} from "../node-types/racing-events/types/RacingEvent"
import type {RacingSession} from "../node-types/racing-sessions/types/RacingSession"
import type {SessionResult} from "../node-types/session-results/types/SessionResult"
import type {LapTime} from "../node-types/lap-times/types/LapTime"
import type {RacingGame} from "../node-types/racing-games/types/RacingGame"
import type {GamingPlatform} from "../node-types/gaming-platforms/types/GamingPlatform"
import type {ModelCar} from "../node-types/model-cars/types/ModelCar"
import type {ModelCarBrand} from "../node-types/model-car-brands/types/ModelCarBrand"
import type {Magazine} from "../node-types/magazines/types/Magazine"
import type {MagazineIssue} from "../node-types/magazine-issues/types/MagazineIssue"
import type {Rating} from "../node-types/ratings/types/Rating"
import type {Programme} from "../node-types/programmes/types/Programme"
import type {ProgrammeEpisode} from "../node-types/programme-episodes/types/ProgrammeEpisode"
import type {MotorShow} from "../node-types/motor-shows/types/MotorShow"
import type {Video} from "../node-types/videos/types/Video"
import type {Image} from "../node-types/images/types/Image"

export type ModelNode =
    Company |
    Brand |
    CarModel |
    CarModelVariant |
    Price |
    RaceTrack |
    TrackLayout |
    RacingSeries |
    RacingEvent |
    RacingSession |
    SessionResult |
    LapTime |
    RacingGame |
    GamingPlatform |
    ModelCar |
    ModelCarBrand |
    Magazine |
    MagazineIssue |
    Rating |
    Programme |
    ProgrammeEpisode |
    MotorShow |
    Video |
    Image
