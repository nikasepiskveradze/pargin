const pargin = (top, right, bottom, left) => {
    return {
        margin: `${top}px ${right}px ${bottom}px ${left}px`,
        padding: `${top}px ${right}px ${bottom}px ${left}px`,
    }
}

module.exports = pargin;