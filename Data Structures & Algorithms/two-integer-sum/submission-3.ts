class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const isSeen = new Map<number, number>();
        let i = 0
        while (i <= nums.length) {
        // for (let i = 0; i <= nums.length; i++) {
            const c = target - nums[i];
            if (isSeen.has(c)) {
                return [isSeen.get(c)!, i];
            }
            isSeen.set(nums[i], i);
            i++;
        }
    }
}
