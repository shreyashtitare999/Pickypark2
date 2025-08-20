// project/emails/service/ServiceImp.java
package project.emails.service;

import java.lang.annotation.Annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import project.emails.entity.Email;

@Service
public class ServiceImp implements project.emails.service.Service {

    @Autowired
    private JavaMailSender javaMailSender;

    public String sendSimpleMail(Email details) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(details.getRecipient());
            message.setSubject(details.getSubject());
            message.setText(details.getMessage());
            message.setFrom("YOUR_EMAIL@gmail.com");

            javaMailSender.send(message);
            return "Mail sent successfully";
        } catch (Exception e) {
            return "Error while sending mail: " + e.getMessage();
        }
    }

	 
}
