import express from "express"
import {getNodeTypeInformation} from "./getNodeTypeInformation"
import {DataNodeType} from "../../data/types/DataNodeType"
import {CompanyModelFacade} from "../../models/CompanyModelFacade"
import {BrandModelFacade} from "../../models/BrandModelFacade"
import {CarModelModelFacade} from "../../models/CarModelModelFacade"
import {CarModelVariantModelFacade} from "../../models/CarModelVariantModelFacade"
import {RaceTrackModelFacade} from "../../models/RaceTrackModelFacade"
import {TrackLayoutModelFacade} from "../../models/TrackLayoutModelFacade"
import {RacingSeriesModelFacade} from "../../models/RacingSeriesModelFacade"
import {RacingEventModelFacade} from "../../models/RacingEventModelFacade"
import {RacingSessionModelFacade} from "../../models/RacingSessionModelFacade"
import {SessionResultModelFacade} from "../../models/SessionResultModelFacade"
import {LapTimeModelFacade} from "../../models/LapTimeModelFacade"
import {RacingGameModelFacade} from "../../models/RacingGameModelFacade"
import {GamingPlatformModelFacade} from "../../models/GamingPlatformModelFacade"
import {MagazineModelFacade} from "../../models/MagazineModelFacade"
import {MagazineIssueModelFacade} from "../../models/MagazineIssueModelFacade"
import {ImageModelFacade} from "../../models/ImageModelFacade"

export async function display(req: express.Request, res: express.Response) {
    const nodeTypes = [
        getNodeTypeInformation(DataNodeType.COMPANY, await CompanyModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.BRAND, await BrandModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.CAR_MODEL, await CarModelModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.CAR_MODEL_VARIANT, await CarModelVariantModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACE_TRACK, await RaceTrackModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.TRACK_LAYOUT, await TrackLayoutModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACING_SERIES, await RacingSeriesModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACING_EVENT, await RacingEventModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACING_SESSION, await RacingSessionModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.SESSION_RESULT, await SessionResultModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.LAP_TIME, await LapTimeModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACING_GAME, await RacingGameModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.GAMING_PLATFORM, await GamingPlatformModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.MAGAZINE, await MagazineModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.MAGAZINE_ISSUE, await MagazineIssueModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.IMAGE, await ImageModelFacade.getTotalNodeCount()),
    ]

    res.render('templates/start-page/start-page', {
        page_title: 'More Cars',
        node_types: nodeTypes,
    })
}
