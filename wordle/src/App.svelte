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
        padding: 15px;
        font-size: 2em;
        text-align: center;
    }
</style>