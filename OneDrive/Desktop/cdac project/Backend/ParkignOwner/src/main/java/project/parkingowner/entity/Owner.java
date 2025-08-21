package project.parkingowner.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "parking_owner")
public class Owner {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id")
    private int pId;

    @Column(name = "p_name")
    private String pName;

    @Column(name = "p_email")
    private String pEmail;

    @Column(name = "p_password")
    private String pPassword;

    @Column(name = "p_phone_number")
    private String pPhoneNumber;

    @Column(name = "p_address")
    private String pAddress;

    @Column(name = "total_slot_2wheeler")
    private int totalSlot2wheeler;

    @Column(name = "total_slot_4wheeler")
    private int totalSlot4wheeler;

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getpEmail() {
		return pEmail;
	}

	public void setpEmail(String pEmail) {
		this.pEmail = pEmail;
	}

	public String getpPassword() {
		return pPassword;
	}

	public void setpPassword(String pPassword) {
		this.pPassword = pPassword;
	}

	public String getpPhoneNumber() {
		return pPhoneNumber;
	}

	public void setpPhoneNumber(String pPhoneNumber) {
		this.pPhoneNumber = pPhoneNumber;
	}

	public String getpAddress() {
		return pAddress;
	}

	public void setpAddress(String pAddress) {
		this.pAddress = pAddress;
	}

	public int getTotalSlot2wheeler() {
		return totalSlot2wheeler;
	}

	public void setTotalSlot2wheeler(int totalSlot2wheeler) {
		this.totalSlot2wheeler = totalSlot2wheeler;
	}

	public int getTotalSlot4wheeler() {
		return totalSlot4wheeler;
	}

	public void setTotalSlot4wheeler(int totalSlot4wheeler) {
		this.totalSlot4wheeler = totalSlot4wheeler;
	}

	@Override
	public String toString() {
		return "Owner [pId=" + pId + ", pName=" + pName + ", pEmail=" + pEmail + ", pPassword=" + pPassword
				+ ", pPhoneNumber=" + pPhoneNumber + ", pAddress=" + pAddress + ", totalSlot2wheeler="
				+ totalSlot2wheeler + ", totalSlot4wheeler=" + totalSlot4wheeler + "]";
	}
	

}
