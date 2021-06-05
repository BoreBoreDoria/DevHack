package com.sm.flow.manager.controller;

import com.sm.flow.manager.dto.ClientCartDto;
import com.sm.flow.manager.service.ClientCartService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/client")
@AllArgsConstructor(onConstructor=@__({@Autowired}))
@Slf4j
public class ClientController {

    ClientCartService clientCartService;

    @GetMapping("/{id}")
    public ClientCartDto getCart(@PathVariable("id") String id) {
        log.debug("Передана карточка клиента:{}",id);
        return clientCartService.getCart(id);
    }

}
