class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();
        for (const str of strs) {
            const sorted = str.split('').sort().join('');
            if (groups.has(sorted)) {
                groups.get(sorted)!.push(str);
            } else {
                groups.set(sorted, [str]);
            }
        }
        return Array.from(groups.values());
    }
}

const solution = new Solution();

console.log(solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(solution.groupAnagrams(["act","pots","tops","cat","stop","hat"])); // [["act","cat"],["pots","tops","stop"],["hat"]]

console.log(solution.groupAnagrams(["a"])); // [["a"]]
