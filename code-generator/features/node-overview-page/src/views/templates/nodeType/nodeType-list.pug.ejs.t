---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list.pug
---
if nodeCollection.length === 0
    div(
        class="max-w-160 m-auto p-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700"
        data-testid="<%= h.changeCase.kebab(nodeType) %>-list-empty"
    )
        p(class="font-bold") No <%= h.changeCase.lower(h.inflection.pluralize(nodeType)) %>
        p No <%= h.changeCase.lower(h.inflection.pluralize(nodeType)) %> were found. Either there are none or this is a temporary issue. Please try again later.
else
    section(data-testid="<%= h.changeCase.kebab(nodeType) %>-section")
        ul(class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-400 m-auto")
        each item in nodeCollection
            include <%= h.changeCase.kebab(nodeType) %>-list-item
