---
to: tests/developer/controllers/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/display-node-collection.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the <%= h.changeCase.title(nodeType) %> overview page', () => {
    test('when there exist no <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        vi.doMock("../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>', async () => {
        vi.doMock("../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>')

        expect(response.statusCode)
            .toBe(200)
    })
})
