<script>
    import {board} from "../store";

    export let x;
    export let y;

    $:letter = $board[y][x]
</script>

<div class="cell">
    {letter}
</div>

<style>

    .cell {
        width: 60px;
        height: 60px;
        color: white;
        background-color: var(--bg);
        margin: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        border-radius: 5px;
    }

</style>