---
to: src/routes/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.ts
---
import express from "express"
import {<%= h.changeCase.pascal(nodeType) %>ControllerFacade} from "../controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade"

const router = express.Router()

router.get('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>', <%= h.changeCase.pascal(nodeType) %>ControllerFacade.showAllNodes)

export default router
