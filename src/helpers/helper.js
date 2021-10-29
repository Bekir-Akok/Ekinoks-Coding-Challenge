/*Change color of types*/

export const changeColor = (types) => {
    if (types) {
        const firstIndex = types.current[0].innerHTML;
        if (firstIndex === "POISON" || firstIndex === "GRASS") {
            types.current[0].style.backgroundColor = "#b4e639"
        } else if (firstIndex === "FIRE" || firstIndex === "FIGHTING"
            || firstIndex === "DRAGON") {
            types.current[0].style.backgroundColor = "#ee214a"
        } else if (firstIndex === "WATER" || firstIndex === "FLYING"
            || firstIndex === "ICE") {
            types.current[0].style.backgroundColor = "#5DADE2"
        } else if (firstIndex === "ROCK" || firstIndex === "GHOST"
            || firstIndex === "STEEL") {
            types.current[0].style.backgroundColor = "#D0D3D4"
        } else if (firstIndex === "ELECTRIC" || firstIndex === "FAIRY") {
            types.current[0].style.backgroundColor = "#3498DB"
        } else if (firstIndex === "NORMAL" || firstIndex === "BUG") {
            types.current[0].style.backgroundColor = "#fc9c94"
        } else if (firstIndex === "GROUND" || firstIndex === "PSYCHIC") {
            types.current[0].style.backgroundColor = "#DC7633"
        }
        if (types.current[1]) {
            const secondIndex = types.current[1].innerHTML;
            if (secondIndex === "POISON" || secondIndex === "GRASS") {
                types.current[1].style.backgroundColor = "#b4e639"
            } else if (secondIndex === "FIRE" || secondIndex === "FIGHTING"
                || secondIndex === "DRAGON") {
                types.current[1].style.backgroundColor = "#ee214a"
            } else if (secondIndex === "WATER" || secondIndex === "FLYING"
                || secondIndex === "ICE") {
                types.current[1].style.backgroundColor = "#5DADE2"
            } else if (secondIndex === "ROCK" || secondIndex === "GHOST"
                || secondIndex === "STEEL") {
                types.current[1].style.backgroundColor = "#D0D3D4"
            } else if (secondIndex === "ELECTRIC" || secondIndex === "FAIRY") {
                types.current[1].style.backgroundColor = "#3498DB"
            } else if (secondIndex === "NORMAL" || secondIndex === "BUG") {
                types.current[1].style.backgroundColor = "#fc9c94"
            } else if (secondIndex === "GROUND" || secondIndex === "PSYCHIC") {
                types.current[1].style.backgroundColor = "#DC7633"
            }
        }
    }
}

/*Change color to  array refs*/

/*change color to refs*/

export const statsColor = (stats) => {
    stats &&
        stats.current.map(span => {
            const item = span.innerHTML
            if (item === "HP") {
                span.style.backgroundColor = "#fcdce1"
            } else if (item === "ATTACK") {
                span.style.backgroundColor = "#f9c5d1"
            } else if (item === "DEFENSE") {
                span.style.backgroundColor = "#f7acbf"
            } else if (item === "SPECIAL-ATTACK") {
                span.style.backgroundColor = "#f38aa5"
            } else if (item === "SPECIAL-DEFENSE") {
                span.style.backgroundColor = "#e15c7c"
            } else if (item === "SPEED") {
                span.style.backgroundColor = "#c23350"
            }
        })
}