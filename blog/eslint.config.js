// @ts-check
// Migrado de .eslintrc.json (eslint 7 + @angular-eslint 16) a flat config
// (eslint 9 + angular-eslint 21). Mismas reglas del proyecto original.
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    ignores: ["projects/**/*", "www/**/*", ".angular/**/*"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          "suffixes": ["Page", "Component"]
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          "type": "element",
          "prefix": "app",
          "style": "kebab-case"
        }
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          "type": "attribute",
          "prefix": "app",
          "style": "camelCase"
        }
      ],
      // El código original es anterior a estas reglas; se relajan para no
      // mezclar la migración de seguridad con refactors de estilo.
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@angular-eslint/prefer-inject": "off",
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/no-empty-lifecycle-method": "off",
      "@angular-eslint/use-lifecycle-interface": "warn"
    }
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {
      // Migrar *ngIf/*ngFor al control flow nuevo es un refactor de plantillas
      // fuera del alcance de esta actualización de seguridad.
      "@angular-eslint/template/prefer-control-flow": "off"
    }
  }
);
