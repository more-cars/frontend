---
inject: true
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list.pug
after: nodeUrlPath
skip_if: thumbnails.get(nodeItem.id)
---
                - thumbnail = thumbnails.get(nodeItem.id)