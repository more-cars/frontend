import {CarModelVariantNode} from "../../../data/node-types/car-model-variants/types/CarModelVariantNode"
import {CarModelVariant} from "./types/CarModelVariant"

export function convertCarModelVariantNode(dataNode: CarModelVariantNode) {
    const carModelVariant: CarModelVariant = {
        id: dataNode.id,
        name: dataNode.name,
        internal_code: dataNode.internal_code || null,
        built_from: dataNode.built_from || null,
        built_to: dataNode.built_to || null,
        body_style: dataNode.body_style || null,
        drag_coefficient: dataNode.drag_coefficient || null,
        doors: dataNode.doors || null,
        weight: dataNode.weight || null,
        weight_unit: dataNode.weight_unit || null,
        max_power: dataNode.max_power || null,
        max_power_unit: dataNode.max_power_unit || null,
        max_torque: dataNode.max_torque || null,
        max_torque_unit: dataNode.max_torque_unit || null,
        cylinders: dataNode.cylinders || null,
        engine_configuration: dataNode.engine_configuration || null,
        displacement: dataNode.displacement || null,
        displacement_unit: dataNode.displacement_unit || null,
        air_induction: dataNode.air_induction || null,
        engine_type: dataNode.engine_type || null,
        energy_source: dataNode.energy_source || null,
        energy_source_2: dataNode.energy_source_2 || null,
        consumption: dataNode.consumption || null,
        consumption_unit: dataNode.consumption_unit || null,
        consumption_2: dataNode.consumption_2 || null,
        consumption_2_unit: dataNode.consumption_2_unit || null,
        energy_capacity: dataNode.energy_capacity || null,
        energy_capacity_unit: dataNode.energy_capacity_unit || null,
        energy_capacity_2: dataNode.energy_capacity_2 || null,
        energy_capacity_2_unit: dataNode.energy_capacity_2_unit || null,
        transmission: dataNode.transmission || null,
        gears: dataNode.gears || null,
        drivetrain: dataNode.drivetrain || null,
        sprint_time_0_100_kmh: dataNode.sprint_time_0_100_kmh || null,
        top_speed: dataNode.top_speed || null,
        top_speed_unit: dataNode.top_speed_unit || null,
        total_production: dataNode.total_production || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return carModelVariant
}
