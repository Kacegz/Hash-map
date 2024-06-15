class HashMap {
  constructor() {
    this.buckets = new Array(16).fill().map((bucket) => []);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];
    if (bucket != []) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] == key) {
          return bucket[i][1];
        }
      }
    }
    return;
  }
  has(key) {
    const bucket = this.buckets[this.hash(key)];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return true;
    }
    return false;
  }
  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  length() {
    let length = 0;
    this.buckets.forEach((bucket) => {
      bucket.forEach((element) => {
        length++;
      });
    });
    return length;
  }
  clear() {
    this.buckets = new Array(16).map(() => []);
    return true;
  }
  keys() {
    let keys = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((element, index) => {
        keys.push(bucket[index][0]);
      });
    });
    return keys;
  }
  values() {
    let values = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((element, index) => {
        values.push(bucket[index][1]);
      });
    });
    return values;
  }
  entries() {
    let entries = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((element, index) => {
        entries.push(bucket[index]);
      });
    });
    return entries;
  }
}
const map = new HashMap();
console.log(map);
map.set(1, "green");
map.set(2, "yellow");
console.log(map);
console.log(map.get(1));
console.log(map.has(1)); //true
console.log(map.has(10)); //false
//console.log(map.remove(1));
//console.log(map.length());
//console.log(map.clear());
//console.log(map.length());
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
