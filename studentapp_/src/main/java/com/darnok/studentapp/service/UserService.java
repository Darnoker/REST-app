package com.darnok.studentapp.service;

import com.darnok.studentapp.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public void deleteUser(Long id);
}
