<script>
    import Board from "./components/Board.svelte";
    import KeyBoard from "./components/KeyBoard.svelte";
</script>
<main>
	<nav>Worde Clone</nav>

    <Board/>
    <KeyBoard/>
</main>

<style>
    nav {
        background-color: var(--bg);
        color: white;
        font-weight: bold;
        padding: 10px;
        font-size: 2rem;
        text-align: center;
    }
</style>