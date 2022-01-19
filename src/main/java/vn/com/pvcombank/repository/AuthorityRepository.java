package vn.com.pvcombank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.com.pvcombank.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
