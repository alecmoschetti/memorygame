<section on:click class="card ">
    <slot></slot>
</section>

<style>
    .card {
        box-shadow: 0px 8px 30px -11px rgba(30, 30, 60, 0.5);
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        width: 12rem;
        height: 12rem;
        max-width: 100%;
        max-height: 100%;
        padding: 1rem;
        margin: 4% auto;
        text-align: center;
        background-color: #D6D6D6;
        border-radius: 6px;
    }
</style>