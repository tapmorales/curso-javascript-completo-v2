module.exports.getByFlag = flag => {
    const indexOfFlag = process.argv.indexOf(flag)
    if (indexOfFlag > -1) {
        return process.argv[indexOfFlag + 1]
    }
    return null

}