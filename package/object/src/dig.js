function dig(obj, target) {
    target in obj ? obj[target] : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
    }, undefined);
}

export default dig;