---
to: tests/developer/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get-node-collection.test.ts
---
import {describe, expect, test, vi} from "vitest"
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../../src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {findAllNodes} from "../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>Node"

describe('Collect node collection for the <%= h.changeCase.upper(nodeType) %> overview page', () => {
    test('when there exist no <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as <%= h.changeCase.pascal(nodeType) %>Node,
            {id: 2, name: "dummy 2"} as <%= h.changeCase.pascal(nodeType) %>Node,
            {id: 3, name: "dummy 3"} as <%= h.changeCase.pascal(nodeType) %>Node,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as <%= h.changeCase.pascal(nodeType) %>Node)
        }

        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
