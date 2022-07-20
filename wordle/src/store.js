import {writable} from "svelte/store";

function createGrid() {
    const grid = [];
    for (let i = 0 ; i < 6; i++) {
        grid.push([])
        for (let x = 0; x < 5; x++) {
            grid[i][x] = ""
        }
    }
    return grid;
}

export const board = writable(createGrid())