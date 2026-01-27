---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>Thumbnails.ts
---
import {<%= h.changeCase.pascal(nodeType) %>} from "../../../models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>"
import {Image} from "../../../models/node-types/images/types/Image"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"

export async function get<%= h.changeCase.pascal(nodeType) %>Thumbnails(<%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>: <%= h.changeCase.pascal(nodeType) %>[]) {
    const thumbnails = new Map<number, Image | null>

    for (const <%= h.changeCase.camel(nodeType) %> of <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>) {
        thumbnails.set(<%= h.changeCase.camel(nodeType) %>.id, await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnectedMainImage(<%= h.changeCase.camel(nodeType) %>.id) || null)
    }

    return thumbnails
}
