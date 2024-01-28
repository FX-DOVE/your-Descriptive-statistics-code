
1. /*Create a class that has class/static properties and methods. 
Show how to use/access them.*/

 class Animal {
   constructor(name, age) {
     this.name = name;
   this.age = age;
 }

 speak() {
   console.log(${this.name} makes a sound.);
 }

  getInfo() {
    console.log(${this.name} is ${this.age} years old.);
  }
 }

// // Example usage
 cat.getInfo(); 
const cat = new Animal('Whiskers', 5);
cat.speak(); 




2. /*  Using ES6+ classes, prepare code that computes descriptive statistics. 
Use the refreshment below to refresh your memory.

i. The measures of central tendency: 3 of them 

ii. The measures of dispersion: 5 of them */
class DescriptiveStats {
    constructor(data) {
        this.data = data;
    }

    // Measures of Central Tendency
    mean() {
        let sum = this.data.reduce((a, b) => a + b, 0);
        return sum / this.data.length;
    }

    median() {
        let sorted = [...this.data].sort((a, b) => a - b);
        let middle = Math.floor(sorted.length / 2);

        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        } else {
            return sorted[middle];
        }
    }

    mode() {
        let counts = {};
        this.data.forEach(num => counts[num] = (counts[num] || 0) + 1);
        let maxCount = Math.max(...Object.values(counts));
        return Object.keys(counts).filter(num => counts[num] === maxCount);
    }

    // Measures of Dispersion
    range() {
        return Math.max(...this.data) - Math.min(...this.data);
    }

    variance() {
        let mean = this.mean();
        let squaredDiff = this.data.map(num => Math.pow(num - mean, 2));
        return squaredDiff.reduce((a, b) => a + b, 0) / this.data.length;
    }

    standardDeviation() {
        return Math.sqrt(this.variance());
    }

    interquartileRange() {
        let sorted = [...this.data].sort((a, b) => a - b);
        let q1 = sorted[Math.floor((sorted.length / 4))];
        let q3 = sorted[Math.floor((sorted.length * (3 / 4)))];
        return q3 - q1;
    }

    meanAbsoluteDeviation() {
        let mean = this.mean();
        let sumAbsoluteDiff = this.data.map(num => Math.abs(num - mean)).reduce((a, b) => a + b, 0);
        return sumAbsoluteDiff / this.data.length;
    }
}

// Usage
let stats = new DescriptiveStats([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(`Mean: ${stats.mean()}`);
console.log(`Median: ${stats.median()}`);
console.log(`Mode: ${stats.mode()}`);
console.log(`Range: ${stats.range()}`);
console.log(`Variance: ${stats.variance()}`);
console.log(`Standard Deviation: ${stats.standardDeviation()}`);
console.log(`Interquartile Range: ${stats.interquartileRange()}`);
console.log(`Mean Absolute Deviation: ${stats.meanAbsoluteDeviation()}`);
