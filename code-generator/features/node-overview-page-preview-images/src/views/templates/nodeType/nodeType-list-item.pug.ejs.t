---
inject: true
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list-item.pug
before: "include ../nodes/thumbnail"
skip_if: thumbnails.get(item.id)
---
        - thumbnail = thumbnails.get(item.id)