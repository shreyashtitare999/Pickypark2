
package project.parkingattendent.service;

import java.util.List;

import project.parkingattendent.entity.Attendent;

public interface AttendentService {
    Attendent addAttendent(Attendent attendent);
    List<Attendent> getAllAttendants();
    Attendent getAttendentById(int id);
    List<Attendent> getAttendantsByAddress(String address);
}