package vn.com.pvcombank.web.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static vn.com.pvcombank.web.rest.AccountResourceIT.TEST_USER_LOGIN;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.test.context.TestSecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import vn.com.pvcombank.IntegrationTest;
import vn.com.pvcombank.config.TestSecurityConfiguration;
import vn.com.pvcombank.security.AuthoritiesConstants;
import vn.com.pvcombank.service.UserService;

/**
 * Integration tests for the {@link AccountResource} REST controller.
 */
@AutoConfigureMockMvc
@WithMockUser(value = TEST_USER_LOGIN)
@IntegrationTest
class AccountResourceIT {

    static final String TEST_USER_LOGIN = "test";

    @Autowired
    private MockMvc restAccountMockMvc;

    @Test
    @Transactional
    void testGetExistingAccount() throws Exception {
        Map<String, Object> userDetails = new HashMap<>();
        userDetails.put("sub", TEST_USER_LOGIN);
        userDetails.put("email", "john.doe@jhipster.com");
        Collection<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(AuthoritiesConstants.ADMIN));
        OAuth2User user = new DefaultOAuth2User(authorities, userDetails, "sub");
        OAuth2AuthenticationToken authentication = new OAuth2AuthenticationToken(user, authorities, "oidc");
        TestSecurityContextHolder.getContext().setAuthentication(authentication);

        restAccountMockMvc
            .perform(get("/api/account").accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.login").value(TEST_USER_LOGIN))
            .andExpect(jsonPath("$.email").value("john.doe@jhipster.com"))
            .andExpect(jsonPath("$.authorities").value(AuthoritiesConstants.ADMIN));
    }

    @Test
    void testGetUnknownAccount() throws Exception {
        restAccountMockMvc.perform(get("/api/account").accept(MediaType.APPLICATION_JSON)).andExpect(status().isInternalServerError());
    }
}
