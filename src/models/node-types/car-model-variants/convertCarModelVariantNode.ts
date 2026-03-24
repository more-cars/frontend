import {CarModelVariantNode} from "../../../data/node-types/car-model-variants/types/CarModelVariantNode"
import {CarModelVariant} from "./types/CarModelVariant"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertCarModelVariantNode(dataNode: CarModelVariantNode) {
    const carModelVariant: CarModelVariant = {
        type: ModelNodeType.CAR_MODEL_VARIANT,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            internal_code: dataNode.data.internal_code || null,
            built_from: dataNode.data.built_from || null,
            built_to: dataNode.data.built_to || null,
            body_style: dataNode.data.body_style || null,
            drag_coefficient: dataNode.data.drag_coefficient || null,
            doors: dataNode.data.doors || null,
            weight: dataNode.data.weight || null,
            weight_unit: dataNode.data.weight_unit || null,
            max_power: dataNode.data.max_power || null,
            max_power_unit: dataNode.data.max_power_unit || null,
            max_torque: dataNode.data.max_torque || null,
            max_torque_unit: dataNode.data.max_torque_unit || null,
            cylinders: dataNode.data.cylinders || null,
            engine_configuration: dataNode.data.engine_configuration || null,
            displacement: dataNode.data.displacement || null,
            displacement_unit: dataNode.data.displacement_unit || null,
            air_induction: dataNode.data.air_induction || null,
            engine_type: dataNode.data.engine_type || null,
            energy_source: dataNode.data.energy_source || null,
            energy_source_2: dataNode.data.energy_source_2 || null,
            consumption: dataNode.data.consumption || null,
            consumption_unit: dataNode.data.consumption_unit || null,
            consumption_2: dataNode.data.consumption_2 || null,
            consumption_2_unit: dataNode.data.consumption_2_unit || null,
            energy_capacity: dataNode.data.energy_capacity || null,
            energy_capacity_unit: dataNode.data.energy_capacity_unit || null,
            energy_capacity_2: dataNode.data.energy_capacity_2 || null,
            energy_capacity_2_unit: dataNode.data.energy_capacity_2_unit || null,
            transmission: dataNode.data.transmission || null,
            gears: dataNode.data.gears || null,
            drivetrain: dataNode.data.drivetrain || null,
            sprint_time_0_100_kmh: dataNode.data.sprint_time_0_100_kmh || null,
            top_speed: dataNode.data.top_speed || null,
            top_speed_unit: dataNode.data.top_speed_unit || null,
            total_production: dataNode.data.total_production || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return carModelVariant
}
