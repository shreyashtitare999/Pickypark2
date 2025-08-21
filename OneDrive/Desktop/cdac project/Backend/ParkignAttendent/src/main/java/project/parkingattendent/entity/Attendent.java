package project.parkingattendent.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "parking_attendent")
public class Attendent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int aId;

    @Column(name = "a_name")
    private String aName;

    @Column(name = "a_phone_number")
    private String aPhoneNumber;

    @Column(name = "a_email")
    private String aEmail;

    @Column(name = "a_password")
    private String aPassword;

    @Column(name = "p_id")
    private int pId;

   
    @Column(name = "p_address") 
    private String pAddress;

    

    public int getaId() {
        return aId;
    }

    public void setaId(int aId) {
        this.aId = aId;
    }

    public String getaName() {
        return aName;
    }

    public void setaName(String aName) {
        this.aName = aName;
    }

    public String getaPhoneNumber() {
        return aPhoneNumber;
    }

    public void setaPhoneNumber(String aPhoneNumber) {
        this.aPhoneNumber = aPhoneNumber;
    }

    public String getaEmail() {
        return aEmail;
    }

    public void setaEmail(String aEmail) {
        this.aEmail = aEmail;
    }

    public String getaPassword() {
        return aPassword;
    }

    public void setaPassword(String aPassword) {
        this.aPassword = aPassword;
    }

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public String getpAddress() {
        return pAddress;
    }

    public void setpAddress(String pAddress) {
        this.pAddress = pAddress;
    }
}