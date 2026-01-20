---
to: tests/developer/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get-connected-main-image.test.ts
---
import {describe, expect, test, vi} from "vitest"
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../../../src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnectedMainImage"
import {<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship"

describe('Collect connected main IMAGE for the <%= h.changeCase.upper(nodeType) %> detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as <%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
