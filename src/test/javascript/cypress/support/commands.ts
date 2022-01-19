/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

// ***********************************************
// This commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// ***********************************************
// Begin Specific Selector Attributes for Cypress
// ***********************************************

// Navbar
export const navbarSelector = '[data-cy="navbar"]';
export const adminMenuSelector = '[data-cy="adminMenu"]';
export const accountMenuSelector = '[data-cy="accountMenu"]';
export const registerItemSelector = '[data-cy="register"]';
export const settingsItemSelector = '[data-cy="settings"]';
export const passwordItemSelector = '[data-cy="passwordItem"]';
export const loginItemSelector = '[data-cy="login"]';
export const logoutItemSelector = '[data-cy="logout"]';
export const entityItemSelector = '[data-cy="entity"]';

// Administration
export const userManagementPageHeadingSelector = '[data-cy="userManagementPageHeading"]';
export const swaggerFrameSelector = 'iframe[data-cy="swagger-frame"]';
export const swaggerPageSelector = '[id="swagger-ui"]';

// ***********************************************
// End Specific Selector Attributes for Cypress
// ***********************************************

export const classInvalid = 'av-invalid';

export const classValid = 'av-valid';

// Convert this to a module instead of script (allows import/export)
export {};
