package com.sm.flow.manager.service;

import com.sm.flow.manager.model.ClientRole;
import com.sm.flow.manager.model.ConfigEnabler;
import com.sm.flow.manager.model.ConfigEntity;
import com.sm.flow.manager.flow.FlowType;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.stream.Collectors;

import static com.sm.flow.manager.flow.FlowType.*;



@Service
public class ClientConfigServiceImpl implements ClientConfigService {

    @Override
    public HashMap<String, Boolean> getConfig(ClientRole role) {
        boolean mass = ClientRole.MASS.equals(role);
        boolean premier = ClientRole.PREMIER.equals(role);
        boolean vip = ClientRole.VIP.equals(role);
        ConfigEnabler configEnabler = ConfigEnabler.builder()
                .createCurrency(isOk(CREATE_CURRENCY, mass || premier || vip))
                .createNsj(isOk(CREATE_NSJ, premier || vip))
                .getHistory(isOk(GET_HISTORY, mass || premier || vip))
                .createSwift(isOk(CREATE_SWIFT, vip))
                .build();

        return (HashMap<String, Boolean>) configEnabler.getConfig().stream()
                .collect(Collectors.toMap(ConfigEntity::getConfigName, ConfigEntity::isEnable));
    }

    private ConfigEntity isOk(FlowType flow, boolean check) {
        return new ConfigEntity(flow.getName(), check);
    }


}
