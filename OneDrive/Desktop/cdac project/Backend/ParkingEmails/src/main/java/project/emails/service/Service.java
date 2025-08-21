// project/emails/service/EmailService.java
package project.emails.service;

import project.emails.entity.Email;

public interface Service {
    String sendSimpleMail(Email details);
}
