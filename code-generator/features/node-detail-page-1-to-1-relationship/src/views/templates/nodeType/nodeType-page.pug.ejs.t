---
inject: true
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page.pug
after: main-area-secondary
skip_if: relationships.<%= h.changeCase.snake(partnerNodeType) %>.item
---
            - <%= h.changeCase.camel(partnerNodeType) %> = relationships.<%= h.changeCase.snake(partnerNodeType) %>.item
            include connected-<%= h.changeCase.kebab(partnerNodeType) %>
