---
to: tests/developer/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get-node.test.ts
---
import {describe, expect, test, vi} from "vitest"
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../../../src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {findNodeById} from "../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findNodeById"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>Node"

describe('Collect node for the <%= h.changeCase.upper(nodeType) %> detail page', () => {
    test('when the <%= h.changeCase.upper(nodeType) %> does not exist', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the <%= h.changeCase.upper(nodeType) %> exists', async () => {
        const node = {id: 1, name: "dummy 1"} as <%= h.changeCase.pascal(nodeType) %>Node
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getNodeById').mockResolvedValue(node)

        const <%= h.changeCase.camel(nodeType) %> = await findNodeById(1)

        expect(<%= h.changeCase.camel(nodeType) %>?.id).toEqual(node.id)
        expect(<%= h.changeCase.camel(nodeType) %>?.name).toEqual(node.name)
    })
})
