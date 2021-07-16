
export function deploymentFrequency(deployments) {
    const dateArray = [];
    let weeks = 1;
    let frequency = 0;
    if (deployments.length > 0) {
        for (let i=0; i<deployments.length; i++) {
            dateArray.push(new Date(deployments[i].date));
            var maxDate = new Date(Math.max.apply(null, dateArray));
            var minDate = new Date(Math.min.apply(null, dateArray));
            weeks = weeksBetween(minDate, maxDate);
            if (weeks === 0) {
                weeks = 1;
            }
            frequency = deployments.length / weeks;
            frequency = Math.round(frequency * 10) / 10;
        }
    }
    return frequency + "/week";
}

function weeksBetween(minDate, maxDate) {
    return Math.round(maxDate - minDate) / (1000 * 60 * 60 * 24 * 7);
}

export function getMaxNumber() {
    return Math.max.apply(null, [1, 2, 3, 4, 5]);
}