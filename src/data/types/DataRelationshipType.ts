export enum DataRelationshipType {
    BRAND_HAS_CAR_MODEL = 'has car model',
    CAR_MODEL_BELONGS_TO_BRAND = 'belongs to brand',
    BRAND_HAS_IMAGE = 'has image',
    CAR_MODEL_HAS_IMAGE = 'has image',
    IMAGE_BELONGS_TO_NODE = 'belongs to node',
}