const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        target: '#svelte',
        // add this 👇
        vite: {
            define: {
                global: {}
            }
        }
    }
};