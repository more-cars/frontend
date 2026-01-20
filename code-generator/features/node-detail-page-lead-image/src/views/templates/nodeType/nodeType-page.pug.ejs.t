---
inject: true
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page.pug
before: "item = <%= h.changeCase.camel(nodeType) %>"
skip_if: mainImage
---
            - mainImage = node.main_image
            include ../nodes/connected-main-image
