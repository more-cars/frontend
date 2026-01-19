---
to: tests/developer/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/display-node.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a <%= h.changeCase.upper(nodeType) %> detail page', () => {
    test('when the <%= h.changeCase.upper(nodeType) %> does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the <%= h.changeCase.upper(nodeType) %> exists', async () => {
        vi.doMock("../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
