export default {
  '**/*.{js,ts,jsx,tsx}': 'eslint --fix',
  '**/*.{ts,tsx}': () => 'tsc --noEmit',
}
