package com.sm.flow.manager.controller;

import com.sm.flow.manager.dto.ClientCartDto;
import com.sm.flow.manager.service.ClientCartService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/client")
@AllArgsConstructor(onConstructor=@__({@Autowired}))
public class ClientController {

    ClientCartService clientCartService;

    @GetMapping("/{id}")
    public ClientCartDto getCart(@PathVariable("id") String id) {
        return clientCartService.getCart(id);
    }

}
