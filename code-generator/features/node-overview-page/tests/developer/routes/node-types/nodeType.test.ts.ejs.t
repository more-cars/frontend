---
to: tests/developer/routes/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.test.ts
---
import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('<%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
