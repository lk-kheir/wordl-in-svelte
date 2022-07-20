<script>
    import Key from "./Key.svelte";

    const row1 = ['q','w','e','r','t','y','u','i','o','p']
    const row2 = ['a','s','d','f','g','h','j','k','l']
    const row3 = ["ENTER" , 'z','x','c','v','b','n','m' , "DEL"]
</script>

<div class="keyboard">
    <div class="row">
        {#each row1 as char}
            <Key {char}/>
        {/each}
    </div>
    <div class="row">
        {#each row2 as char}
            <Key {char}/>
        {/each}
    </div>
    <div class="row">
        {#each row3 as char}
            <Key {char}/>
        {/each}
    </div>

</div>

<style>
    .keyboard {
        position: fixed;
        width: fit-content;
        bottom: 20px;
        left: 50%;
        transform: translate(-50% , 0);
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>