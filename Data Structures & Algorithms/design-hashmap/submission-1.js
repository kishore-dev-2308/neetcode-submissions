class MyHashMap {
    constructor() {
        this.data = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.data[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.data[key] !== undefined ? this.data[key] : -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
  const { [key]: _, ...updatedData } = this.data;
  this.data = updatedData;
}

}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
