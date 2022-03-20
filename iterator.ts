function range(startNumber: number, endNumber: number, step = 1) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (startNumber < endNumber) {
                startNumber += step;

                return {
                    done: false,
                    value: startNumber,
                };
            }

            return {
                done: true,
            };
        },
    };
}

for (const i of range(0, 20, 10)) {
    console.log(i)
}