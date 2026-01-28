---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page.pug
---
extends ../../node-types/detail-page

block sub_headline
    - <%= h.changeCase.camel(nodeType) %> = node.data
    div(class="mb-4 text-sm") ...

block relationships
    - <%= h.changeCase.camel(nodeType) %> = node.data
