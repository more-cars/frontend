---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
after: "}\n$"
skip_if: function getThumbnails
---
async function getThumbnails(<%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>: <%= h.changeCase.pascal(nodeType) %>[]) {
    const thumbnails = []

    for (const <%= h.changeCase.camel(nodeType) %> of <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>) {
        const thumbnail = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnectedMainImage(<%= h.changeCase.camel(nodeType) %>.id)
        thumbnails[<%= h.changeCase.camel(nodeType) %>.id] = thumbnail || null
    }

    return thumbnails
}
