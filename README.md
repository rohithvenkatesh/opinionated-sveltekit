# embox

by rohith venkatesh.

**tools**

- svelte + sveltekit
- typescript
- tailwindcss
- prettier

**development setup**

1. clone this repo
2. `npm install`
3. `npm run dev` and go to `localhost:3000`

**development notes**

1. always prefer imports using `$lib` over relative imports

2. the `prettier-plugin-tailwindcss` npm package will take care of ordering tailwind classes

3. for html tags, if the `class` attribute ends up > 80 line width, split into a newline with _similar_ attributes grouped per line (this takes place after the `prettier-plugin-tailwindcss` npm package has ordered the classes). 

    use your best heuristic — default to force wrapping at 80 characters.

    additionally, align each continuing line to the `class` keyboard

    example:

    ```html
    class="fill-primarylight w-12 rounded p-2 transition-all 
    first:bg-transparent last:mt-auto hover:bg-gray-600 first:hover:bg-transparent 
    {selected ? 'bg-primary' : 'bg-transparent'}"
    ```
    
    notice that the **first** line contains general classes, the second line contains targeting classes, and the third line contains a computed class using a ternary operator
