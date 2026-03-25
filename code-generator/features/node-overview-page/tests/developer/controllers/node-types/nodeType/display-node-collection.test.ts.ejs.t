---
to: tests/developer/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/display-node-collection.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import {<%= h.changeCase.pascal(nodeType) %>ControllerFacade} from "../../../../../src/controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../../../src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"
import {supertestGet} from "../../../supertestGet"
import {Fake<%= h.changeCase.pascal(nodeType) %>} from "../../../../_toolbox/fixtures/node-types/Fake<%= h.changeCase.pascal(nodeType) %>"
import type {<%= h.changeCase.pascal(nodeType) %>} from "../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the <%= h.changeCase.upper(nodeType) %> overview page', () => {
    test('when there exist no <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        const spy = vi.spyOn(<%= h.changeCase.pascal(nodeType) %>ControllerFacade, 'showAllNodes')

        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>ModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        const spy = vi.spyOn(<%= h.changeCase.pascal(nodeType) %>ControllerFacade, 'showAllNodes')

        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>ModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                Fake<%= h.changeCase.pascal(nodeType) %>.model,
                Fake<%= h.changeCase.pascal(nodeType) %>.model,
                Fake<%= h.changeCase.pascal(nodeType) %>.model,
            ] satisfies <%= h.changeCase.pascal(nodeType) %>[])

        const response = await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
