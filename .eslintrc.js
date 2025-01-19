module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "import/newline-after-import": [
      "error",
      {
        count: 1,
      },
    ],
    // increase the severity of rules so they are auto-fixable
    "simple-import-sort/imports": [
      "error",
      {
    "simple-import-sort/exports": "error",

        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
      
          // Internal packages.
          ["^(@)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
    "simple-import-sort/exports": "error",

          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder 
      imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"],
        ],
      },
    "simple-import-sort/exports": "error",

    ],
    "simple-import-sort/exports": "error",
  },
};
