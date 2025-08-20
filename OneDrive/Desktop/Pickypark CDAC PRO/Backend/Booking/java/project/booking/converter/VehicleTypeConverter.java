package project.booking.converter;


import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import project.booking.entity.VehicleType;


@Converter(autoApply = true)
public class VehicleTypeConverter implements AttributeConverter<VehicleType, String> {

    @Override
    public String convertToDatabaseColumn(VehicleType vehicleType) {
        return vehicleType != null ? vehicleType.getDbValue() : null;
    }

    @Override
    public VehicleType convertToEntityAttribute(String dbData) {
        return dbData != null ? VehicleType.fromDbValue(dbData) : null;
    }
}