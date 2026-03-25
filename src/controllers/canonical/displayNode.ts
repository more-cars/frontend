import express from "express"
import {NodeModelFacade} from "../../models/NodeModelFacade"
import {mapApiNodeTypeToDataNodeType} from "../lib/mapModelNodeTypeToControllerNodeType"
import {ControllerNodeType} from "../types/ControllerNodeType"
import {displayNode as displayCompanyNode} from "../node-types/companies/displayNode"
import {displayNode as displayBrandNode} from "../node-types/brands/displayNode"
import {displayNode as displayCarModelNode} from "../node-types/car-models/displayNode"
import {displayNode as displayCarModelVariantNode} from "../node-types/car-model-variants/displayNode"
import {displayNode as displayPriceNode} from "../node-types/prices/displayNode"
import {displayNode as displayRaceTrackNode} from "../node-types/race-tracks/displayNode"
import {displayNode as displayTrackLayoutNode} from "../node-types/track-layouts/displayNode"
import {displayNode as displayRacingSeriesNode} from "../node-types/racing-series/displayNode"
import {displayNode as displayRacingEventNode} from "../node-types/racing-events/displayNode"
import {displayNode as displayRacingSessionNode} from "../node-types/racing-sessions/displayNode"
import {displayNode as displaySessionResultNode} from "../node-types/session-results/displayNode"
import {displayNode as displayLapTimeNode} from "../node-types/lap-times/displayNode"
import {displayNode as displayRacingGameNode} from "../node-types/racing-games/displayNode"
import {displayNode as displayGamingPlatformNode} from "../node-types/gaming-platforms/displayNode"
import {displayNode as displayModelCarNode} from "../node-types/model-cars/displayNode"
import {displayNode as displayModelCarBrandNode} from "../node-types/model-car-brands/displayNode"
import {displayNode as displayMagazineNode} from "../node-types/magazines/displayNode"
import {displayNode as displayMagazineIssueNode} from "../node-types/magazine-issues/displayNode"
import {displayNode as displayRatingNode} from "../node-types/ratings/displayNode"
import {displayNode as displayProgrammeNode} from "../node-types/programmes/displayNode"
import {displayNode as displayProgrammeEpisodeNode} from "../node-types/programme-episodes/displayNode"
import {displayNode as displayMotorShowNode} from "../node-types/motor-shows/displayNode"
import {displayNode as displayImageNode} from "../node-types/images/displayNode"

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
            return displayCompanyNode(req, res)
        case ControllerNodeType.BRAND:
            return displayBrandNode(req, res)
        case ControllerNodeType.CAR_MODEL:
            return displayCarModelNode(req, res)
        case ControllerNodeType.CAR_MODEL_VARIANT:
            return displayCarModelVariantNode(req, res)
        case ControllerNodeType.PRICE:
            return displayPriceNode(req, res)
        case ControllerNodeType.RACE_TRACK:
            return displayRaceTrackNode(req, res)
        case ControllerNodeType.TRACK_LAYOUT:
            return displayTrackLayoutNode(req, res)
        case ControllerNodeType.RACING_SERIES:
            return displayRacingSeriesNode(req, res)
        case ControllerNodeType.RACING_EVENT:
            return displayRacingEventNode(req, res)
        case ControllerNodeType.RACING_SESSION:
            return displayRacingSessionNode(req, res)
        case ControllerNodeType.SESSION_RESULT:
            return displaySessionResultNode(req, res)
        case ControllerNodeType.LAP_TIME:
            return displayLapTimeNode(req, res)
        case ControllerNodeType.RACING_GAME:
            return displayRacingGameNode(req, res)
        case ControllerNodeType.GAMING_PLATFORM:
            return displayGamingPlatformNode(req, res)
        case ControllerNodeType.MODEL_CAR:
            return displayModelCarNode(req, res)
        case ControllerNodeType.MODEL_CAR_BRAND:
            return displayModelCarBrandNode(req, res)
        case ControllerNodeType.MAGAZINE:
            return displayMagazineNode(req, res)
        case ControllerNodeType.MAGAZINE_ISSUE:
            return displayMagazineIssueNode(req, res)
        case ControllerNodeType.RATING:
            return displayRatingNode(req, res)
        case ControllerNodeType.PROGRAMME:
            return displayProgrammeNode(req, res)
        case ControllerNodeType.PROGRAMME_EPISODE:
            return displayProgrammeEpisodeNode(req, res)
        case ControllerNodeType.MOTOR_SHOW:
            return displayMotorShowNode(req, res)
        case ControllerNodeType.IMAGE:
            return displayImageNode(req, res)
        default:
            return notFoundError(res)
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
