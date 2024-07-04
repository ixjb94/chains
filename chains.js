/**
 * @param {string[]} list 
 * @param {number} number 
 */
function findChains(list, number) {
    const result = []

    function helper(chain, usedEnds, length) {
        if (chain.length === length) {
            if (isValidChain(chain)) {
                result.push([...chain]);
            }
            return;
        }

        const lastPair = chain[chain.length - 1];
        const [start, end] = lastPair.split('-');
        const nextStart = usedEnds[start] ? end : start;

        for (const pair of list) {
            if (chain.includes(pair)) continue;
            const [pairStart, pairEnd] = pair.split('-');

            if (pairStart === nextStart || pairEnd === nextStart) {
                chain.push(pair);
                usedEnds[nextStart] = true;
                helper(chain, usedEnds, length);
                chain.pop();
                usedEnds[nextStart] = false;
            }
        }
    }

    function isValidChain(chain) {
        const count = {};
        for (const pair of chain) {
            const [start, end] = pair.split('-');
            count[start] = (count[start] || 0) + 1;
            count[end] = (count[end] || 0) + 1;
        }
        return Object.values(count).every(value => value === 2);
    }

    for (const pair of list) {
        helper([pair], {}, number);
    }

    return result;
}
