import { writable, derived } from 'svelte/store';
let hs = 0;
export let reset = writable({});
export let nasaStore = writable([]);
export let currentScore = derived(nasaStore, $nasaStore => {
    let bool = detectDuplicateClick($nasaStore);
    if (bool) {
        return $nasaStore.length = 0;
    } else {
        return $nasaStore.length;
    }
}, 0);
export let highScore = derived(currentScore, ($currentScore) => {
    if ($currentScore > hs) {
        hs = $currentScore;
    }
    return hs;
}, hs);

function detectDuplicateClick(store) {
    return new Set(store).size !== store.length;
}

export function shuffle(array) { /* https://javascript.info/task/shuffle */
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
}