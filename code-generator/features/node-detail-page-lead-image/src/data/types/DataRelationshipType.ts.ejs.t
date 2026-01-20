---
inject: true
to: src/data/types/DataRelationshipType.ts
before: IMAGE_BELONGS_TO_NODE
skip_if: <%= h.changeCase.constant(nodeType) %>_HAS_MAIN_IMAGE
---
    <%= h.changeCase.constant(nodeType) %>_HAS_MAIN_IMAGE = 'has main image',