package com.sm.flow.manager.service;


import com.sm.flow.manager.model.ClientRole;

import java.util.HashMap;

public interface ClientConfigService {

    HashMap<String, Boolean> getConfig(ClientRole role);
}
