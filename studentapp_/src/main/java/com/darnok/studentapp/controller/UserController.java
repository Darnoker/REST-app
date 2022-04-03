package com.darnok.studentapp.controller;

import com.darnok.studentapp.model.User;
import com.darnok.studentapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        userService.saveUser(user);
        return "New user saved";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @DeleteMapping("/delete")
    public String deleteUser(@RequestParam(value = "id")Long id) {
        userService.deleteUser(id);
        return "User deleted";
    }

}
