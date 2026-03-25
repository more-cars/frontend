---
inject: true
to: tests/developer/routes/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.test.ts
before: \}\)\n\}\)
skip_if: Show Node Detail Page
---
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.<%= h.changeCase.constant(nodeType) %>,
                fields: {},
            } as <%= h.changeCase.pascal(nodeType) %>))

        await supertestGet('/<%= h.changeCase.kebab(nodeType) %>-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)