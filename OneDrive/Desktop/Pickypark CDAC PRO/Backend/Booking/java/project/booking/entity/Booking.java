package project.booking.entity;


import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "r_id")
    private int rId;

    @Column(name = "v_no")
    private String vNo;
    
    @Column(name = "r_email")
    private String rEmail;

    @Convert(converter = project.booking.converter.VehicleTypeConverter.class)
    @Column(name = "v_type")
    private VehicleType vType;

    @Column(name = "Duration")
    private int Duration;
    
    @Column(name = "C_in")
    private Time c_in;

    @Column(name = "C_out")
    private Time c_out;
    
    @Column(name = "D_Booking")
    private Date D_Booking;

    @Column(name = "p_address") 
    private String pAddress; 

    // Getters and Setters

    public int getrId() {
        return rId;
    }

    public void setrId(int rId) {
        this.rId = rId;
    }

    public String getvNo() {
        return vNo;
    }

    public void setvNo(String vNo) {
        this.vNo = vNo;
    }

    public String getrEmail() {
        return rEmail;
    }

    public void setrEmail(String rEmail) {
        this.rEmail = rEmail;
    }

    public VehicleType getvType() {
        return vType;
    }

    public void setvType(VehicleType vType) {
        this.vType = vType;
    }

    public int getDuration() {
        return Duration;
    }

    public void setDuration(int duration) {
        Duration = duration;
    }

    public Time getC_in() {
        return c_in;
    }

    public void setC_in(Time c_in) {
        this.c_in = c_in;
    }

    public Time getC_out() {
        return c_out;
    }

    public void setC_out(Time c_out) {
        this.c_out = c_out;
    }

    public Date getD_Booking() {
        return D_Booking;
    }

    public void setD_Booking(Date d_Booking) {
        D_Booking = d_Booking;
    }

    public String getpAddress() {
        return pAddress;
    }

    public void setpAddress(String pAddress) {
        this.pAddress = pAddress;
    }
}