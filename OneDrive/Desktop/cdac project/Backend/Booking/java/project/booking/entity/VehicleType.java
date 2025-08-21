package project.booking.entity;


import com.fasterxml.jackson.annotation.JsonValue;

public enum VehicleType {

    TWO_WHEELER("2w"),
    FOUR_WHEELER("4w");

    private final String dbValue;

    VehicleType(String dbValue) {
        this.dbValue = dbValue;
    }

    @JsonValue
    public String getDbValue() {
        return dbValue;
    }

    public static VehicleType fromDbValue(String value) {
        for (VehicleType type : values()) {
            if (type.dbValue.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown VehicleType: " + value);
    }
}