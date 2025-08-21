package project.emails.controller;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project.emails.entity.Email;
import project.emails.service.Service;

@RestController
@RequestMapping("email")
public class EmailController {

    @Autowired
    private Service emailService;

    @PostMapping("/send")
    public String sendEmail(@RequestBody Email details) {
        return emailService.sendSimpleMail(details);
    }
}