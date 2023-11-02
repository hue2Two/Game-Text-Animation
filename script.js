var text = document.getElementById("text_1")

var speeds = {
    slow: 120,
    normal: 70,
    fast: 40
}

var textLines = [
    {string: "hey" , speed: speeds.normal},
    {string: "whats up?" ,  speed: speeds.fast},
    {string: "I'm great!" , speed: speeds.fast}
]

//now take text lines convert to dom nodes to inject in text container

var characters = []
textLines.forEach((line, index) => {
    // fixes line spacing
    if (index < textLines.length - 1) {
        line.string += " "
    }

    line.string.split("").forEach(character => {
        var span = document.createElement("span")
        span.textContent = character
        text.appendChild(span)
        characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || []
        })
    })
    //now each char is split into its own span tag

})

//this function uses recursion
function revealOneCharacter(list) {
    // gives list of everything we removed from array, we only want 1
    var next = list.splice(0, 1)[0]  
    next.span.classList.add("revealed")

    var delay = next.delayAfter

    if (list.length > 0) {
        setTimeout(function() {
            revealOneCharacter(list)
        }, delay)
    }
}

revealOneCharacter(characters)


console.log(textLines)