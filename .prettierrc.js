module.exports = {
    // Basic formatting
    semi: true,          // Add semicolons at end of statements
    singleQuote: true,   // Use single quotes instead of double
    tabWidth: 2,         // Number of spaces per tab
    useTabs: false,      // Use spaces instead of tabs
    
    // Line formatting
    printWidth: 80,      // Max line width before wrapping
    trailingComma: 'es5', // Add trailing commas where valid in ES5
    bracketSpacing: true, // Add spaces between brackets in object literals
    
    // JSX specific
    jsxSingleQuote: false,     // Use double quotes in JSX
    jsxBracketSameLine: false, // Put > on a new line in JSX
    
    // File handling
    endOfLine: 'lf',     // Line Feed only (\n), common in OSS and Linux
    
    // Next.js specific
    arrowParens: 'always', // Always add parentheses around arrow function parameters
    importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
    importOrderSeparation: true,
    
    // Plugin options if you're using plugins
    plugins: [
      'prettier-plugin-tailwindcss' // Optional: if using Tailwind CSS
    ]
  }