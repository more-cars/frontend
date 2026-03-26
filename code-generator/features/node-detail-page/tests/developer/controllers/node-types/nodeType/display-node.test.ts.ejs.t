---
to: tests/developer/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/display-node.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {Fake<%= h.changeCase.pascal(nodeType) %>} from "../../../../_toolbox/fixtures/node-types/Fake<%= h.changeCase.pascal(nodeType) %>"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../../../src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"
import * as node from "../../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a <%= h.changeCase.upper(nodeType) %> detail page', () => {
    test('when the <%= h.changeCase.upper(nodeType) %> does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/<%= h.changeCase.kebab(nodeType) %>-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the <%= h.changeCase.upper(nodeType) %> exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (Fake<%= h.changeCase.pascal(nodeType) %>.model))
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>ModelFacade, 'getNodeById')
            .mockImplementation(async () => (Fake<%= h.changeCase.pascal(nodeType) %>.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/<%= h.changeCase.kebab(nodeType) %>-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
