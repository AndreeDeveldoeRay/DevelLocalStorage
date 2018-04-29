module.exports = {
    /**
     * Takes an array and transforms it to a string for localStorage
     * and stores is as 'store'
     * @param {Array} data
     */
    set: function(store, data) {
        if (Array.isArray(data)) {
            localStorage.setItem(store, JSON.stringify(data))
            return data
        }
    },
    /**
     * Gets the 'store in localStorage and parses it back to array (JSON)
     * @return {Array} returns the store as an array if it exist otherwise
     * returns an empy array
     */
    get: function(store) {
        var stringArray = localStorage.getItem(store)
        var array = []
        try {
            array = JSON.parse(stringArray)
        } catch (e) {
            console.log(e)
        }
        return Array.isArray(array) ? array : []
    }

}
