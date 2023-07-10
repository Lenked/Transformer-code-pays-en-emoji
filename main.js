function isoToEmoji(code) {
    return code
        .split('')
        .map(char => char.charCodeAt(0) % 32 + 0x1F1E5)
        .map(n => String.fromCodePoint(n))
        .join('')
}

console.log(
    isoToEmoji('cmr'),
    isoToEmoji('fr'),
    isoToEmoji('en'),
    isoToEmoji('en'),
)