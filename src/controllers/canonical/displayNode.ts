import express from "express"
import {NodeModelFacade} from "../../models/NodeModelFacade"
import {mapApiNodeTypeToDataNodeType} from "../lib/mapModelNodeTypeToControllerNodeType"
import {ControllerNodeType} from "../types/ControllerNodeType"
import {CompanyControllerFacade} from "../CompanyControllerFacade"
import {BrandControllerFacade} from "../BrandControllerFacade"
import {CarModelControllerFacade} from "../CarModelControllerFacade"
import {CarModelVariantControllerFacade} from "../CarModelVariantControllerFacade"
import {PriceControllerFacade} from "../PriceControllerFacade"
import {RaceTrackControllerFacade} from "../RaceTrackControllerFacade"
import {TrackLayoutControllerFacade} from "../TrackLayoutControllerFacade"
import {RacingSeriesControllerFacade} from "../RacingSeriesControllerFacade"
import {RacingEventControllerFacade} from "../RacingEventControllerFacade"
import {RacingSessionControllerFacade} from "../RacingSessionControllerFacade"
import {SessionResultControllerFacade} from "../SessionResultControllerFacade"
import {LapTimeControllerFacade} from "../LapTimeControllerFacade"
import {RacingGameControllerFacade} from "../RacingGameControllerFacade"
import {GamingPlatformControllerFacade} from "../GamingPlatformControllerFacade"
import {ModelCarControllerFacade} from "../ModelCarControllerFacade"
import {ModelCarBrandControllerFacade} from "../ModelCarBrandControllerFacade"
import {MagazineControllerFacade} from "../MagazineControllerFacade"
import {MagazineIssueControllerFacade} from "../MagazineIssueControllerFacade"
import {RatingControllerFacade} from "../RatingControllerFacade"
import {ProgrammeControllerFacade} from "../ProgrammeControllerFacade"
import {ProgrammeEpisodeControllerFacade} from "../ProgrammeEpisodeControllerFacade"
import {MotorShowControllerFacade} from "../MotorShowControllerFacade"
import {ImageControllerFacade} from "../ImageControllerFacade"

function idIsNumeric(id: string) {
    return (/^\d+$/.test(id))
}

export async function displayNode(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!idIsNumeric(req.params.id)) {
        return next()
    }

    const nodeId = parseInt(req.params.id)
    const modelNode = await NodeModelFacade.getNodeById(nodeId)

    if (!modelNode) {
        return notFoundError(res)
    }

    switch (mapApiNodeTypeToDataNodeType(modelNode.type)) {
        case ControllerNodeType.COMPANY:
            return CompanyControllerFacade.showNode(req, res)
        case ControllerNodeType.BRAND:
            return BrandControllerFacade.showNode(req, res)
        case ControllerNodeType.CAR_MODEL:
            return CarModelControllerFacade.showNode(req, res)
        case ControllerNodeType.CAR_MODEL_VARIANT:
            return CarModelVariantControllerFacade.showNode(req, res)
        case ControllerNodeType.PRICE:
            return PriceControllerFacade.showNode(req, res)
        case ControllerNodeType.RACE_TRACK:
            return RaceTrackControllerFacade.showNode(req, res)
        case ControllerNodeType.TRACK_LAYOUT:
            return TrackLayoutControllerFacade.showNode(req, res)
        case ControllerNodeType.RACING_SERIES:
            return RacingSeriesControllerFacade.showNode(req, res)
        case ControllerNodeType.RACING_EVENT:
            return RacingEventControllerFacade.showNode(req, res)
        case ControllerNodeType.RACING_SESSION:
            return RacingSessionControllerFacade.showNode(req, res)
        case ControllerNodeType.SESSION_RESULT:
            return SessionResultControllerFacade.showNode(req, res)
        case ControllerNodeType.LAP_TIME:
            return LapTimeControllerFacade.showNode(req, res)
        case ControllerNodeType.RACING_GAME:
            return RacingGameControllerFacade.showNode(req, res)
        case ControllerNodeType.GAMING_PLATFORM:
            return GamingPlatformControllerFacade.showNode(req, res)
        case ControllerNodeType.MODEL_CAR:
            return ModelCarControllerFacade.showNode(req, res)
        case ControllerNodeType.MODEL_CAR_BRAND:
            return ModelCarBrandControllerFacade.showNode(req, res)
        case ControllerNodeType.MAGAZINE:
            return MagazineControllerFacade.showNode(req, res)
        case ControllerNodeType.MAGAZINE_ISSUE:
            return MagazineIssueControllerFacade.showNode(req, res)
        case ControllerNodeType.RATING:
            return RatingControllerFacade.showNode(req, res)
        case ControllerNodeType.PROGRAMME:
            return ProgrammeControllerFacade.showNode(req, res)
        case ControllerNodeType.PROGRAMME_EPISODE:
            return ProgrammeEpisodeControllerFacade.showNode(req, res)
        case ControllerNodeType.MOTOR_SHOW:
            return MotorShowControllerFacade.showNode(req, res)
        case ControllerNodeType.IMAGE:
            return ImageControllerFacade.showNode(req, res)
    }
}

function notFoundError(res: express.Response) {
    return res.render('templates/nodes/node-not-found-page', {
        page_title: `Node not found`
    }, (error, html) => {
        res.statusCode = 404
        res.send(html)
    })
}
