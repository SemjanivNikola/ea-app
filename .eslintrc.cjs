module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        extraFileExtensions: [".json"],
        project: "./tsconfig.json",
        sourceType: "module", // Allows for the use of imports
        useJSXTextNode: false
    },
    settings: {
        react: {
            version: "detect"
        },
        env: {
            browser: true,
            es2021: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: ["react-refresh", "@typescript-eslint", "prettier", "react", "react-hooks"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "prettier/prettier": "error", // Display prittier issues as ESLint
        "linebreak-style": ["error", "unix"],
        "no-console": 1, // Warn console.log/warn/error/info
        "no-unused-expressions": "error",
        "prefer-const": "error", //Enforce using const
        "prefer-destructuring": ["error", { array: false, object: true }],
        "quote-props": "off", // Remove quotes on object keys
        quotes: [2, "double", { avoidEscape: true }], // Enforce double quotes
        "max-len": 0,
        eqeqeq: "error", // Enforce use of === and !== other than == and !=
        "comma-dangle": ["error"], // Dissallow trailing comma
        "comma-spacing": ["error", { after: true, before: false }], // Enforce spacing after comma
        "comma-style": ["error"], // requires a comma after and on the same line as an element
        "no-multi-spaces": "error", // Prevent multispaces between words
        "no-multiple-empty-lines": "error", // Prevent multilines
        "no-magic-numbers": 0, // Prevent using numbers without an explicit meaning
        "no-loop-func": "error", // Disallow function declarations that contain unsafe references inside loop statements. Highlight a piece of code that may not work as you expect it, because
        // writing functions within loops tends to result in errors due to the way the function creates a closure around the loop
        "no-lonely-if": "error", // Prevents using an if statement, if it's only statement in a block
        "no-await-in-loop": "error", // Prevents using await inside a loop

        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_.+", argsIgnorePattern: "^_.+" }],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/consistent-type-definitions": 0,

        "react/boolean-prop-naming": "error", // Enforces consistent naming for boolean props
        "react/no-access-state-in-setstate": "error", // Prevent using this.state inside this.setState
        "react/no-deprecated": "error", // Prevent usage of deprecated methods, including component lifecyle methods
        "react/no-did-mount-set-state": "error", // Prevent usage of setState in componentDidMount
        "react/no-did-update-set-state": "error", // Prevent usage of setState in componentDidUpdate
        "react/no-direct-mutation-state": "error", // Prevent direct mutation of this.state
        "react/no-is-mounted": "error", // Prevent usage of isMounted
        "react/no-redundant-should-component-update": "error", // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        "react/no-typos": "error", // Prevent common casing typos
        "react/no-string-refs": "error", // Prevent using string references in ref attribute.
        "react/no-this-in-sfc": "error", // Prevent using this in stateless functional components
        "react/no-unknown-property": "error", // Prevent usage of unknown DOM property (fixable)
        "react/no-unsafe": "error", // Prevent usage of unsafe lifecycle methods
        "react/no-unused-prop-types": "error", // Prevent definitions of unused prop types
        "react/no-unused-state": "error", // Prevent definitions of unused state properties
        "react/no-will-update-set-state": "error", // Prevent usage of setState in componentWillUpdate
        "react/react-in-jsx-scope": 0, // Prevent missing React when using JSX - disabled because we are using  "jsx": "react-jsx" in tsconfig
        "react/require-render-return": "error", // Enforce ES5 or ES6 class for returning value in render function
        "react/self-closing-comp": "error", // Prevent extra closing tags for components without children (fixable)
        "react/void-dom-elements-no-children": "error", // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        "react/prop-types": 0,

        "react-hooks/exhaustive-deps": 0,

        "react/jsx-boolean-value": ["error", "never"], // Enforce boolean attributes notation in JSX (fixable)
        "react/jsx-child-element-spacing": "error", // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
        "react/jsx-closing-bracket-location": "error", // Validate closing bracket location in JSX (fixable)
        "react/jsx-closing-tag-location": "error", // Validate closing tag location in JSX (fixable)
        "react/jsx-curly-spacing": "error", // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
        "react/jsx-equals-spacing": "error", // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        "react/jsx-handler-names": "off", // Enforce event handler naming conventions in JSX
        "react/jsx-indent-props": ["error"], // Validate props indentation in JSX (fixable) - 4 spaces
        "react/jsx-key": "error", // Validate JSX has key prop when in array or iterator
        "react/jsx-no-comment-textnodes": "error", // Prevent comments from being inserted as text nodes
        "react/jsx-no-duplicate-props": "error", // Prevent duplicate props in JSX
        "react/jsx-no-undef": "error", // Disallow undeclared variables in JSX
        "react/jsx-curly-brace-presence": ["error", { props: "never", children: "ignore" }], // Enforce curly braces or disallow unnecessary curly braces in JSX
        "react/jsx-fragments": "error", // Enforce shorthand or standard form for React fragments
        "react/jsx-pascal-case": "error", // Enforce PascalCase for user-defined JSX components
        "react/jsx-props-no-multi-spaces": "error", // Disallow multiple spaces between inline JSX props (fixable)
        "react/jsx-wrap-multilines": "error" // Prevent missing parentheses around multilines JSX (fixable)
    }
};
