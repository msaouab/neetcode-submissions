class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        
        const sortStr = (str: string): string => str.split('').sort().join('');

        return sortStr(s) === sortStr(t); 
    }
}

const sol = new Solution;
console.log(sol.isAnagram("racecar", "carrace"))