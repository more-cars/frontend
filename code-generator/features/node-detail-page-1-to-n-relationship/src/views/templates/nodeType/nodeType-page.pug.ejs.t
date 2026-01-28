---
inject: true
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page.pug
after: "block relationships\n"
skip_if: <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>
---
            - <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %> = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.items
            include connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>