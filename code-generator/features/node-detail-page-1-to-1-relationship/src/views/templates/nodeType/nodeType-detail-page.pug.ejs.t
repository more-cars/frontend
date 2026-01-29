---
inject: true
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-detail-page.pug
after: "block relationships\n"
skip_if: relationships.<%= h.changeCase.snake(partnerNodeType) %>.item
---

    - <%= h.changeCase.camel(partnerNodeType) %> = relationships.<%= h.changeCase.snake(partnerNodeType) %>.item
    include connected-<%= h.changeCase.kebab(partnerNodeType) %>