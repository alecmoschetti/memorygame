<script>
    import {reset} from '../../scripts/logics.js';
    function resetting() {
        $reset = {};
    }
</script>
<aside class="controls">
    <button on:click={resetting}>Get New NASA Photos</button>
</aside>
<style>
    button {
        font-weight: bold;
        padding: 1rem;
        border: none;
        background-image: linear-gradient(45deg, rgba(252, 61, 33, 0.5), rgba(235, 0, 91, 0.5), rgba(189, 7, 131, 0.5), rgba(120, 50, 151, 0.5), rgba(11, 61, 145, 0.5));
        border-radius: 6px;
        box-shadow: 0px 8px 30px -11px rgba(30, 30, 60, 0.5);
    }
</style>

