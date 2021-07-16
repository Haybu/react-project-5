
export function deploymentFrequency(deployments) {
    const dateArray = [];
    let weeks = 1;
    let frequency = 0;
    if (deployments.length > 0) {
        for (let i=0; i<deployments.length; i++) {
            if (deployments[i].date !== "") {
                dateArray.push(new Date(deployments[i].date));
            }
        }
        var maxDate = new Date(Math.max.apply(null, dateArray));
        var minDate = new Date(Math.min.apply(null, dateArray));
        weeks = weeksBetween(minDate, maxDate);
        if (weeks === 0 || weeks < 1) {
            weeks = 1;
        }
        frequency = deployments.length / weeks;
        frequency = Math.round(frequency * 10) / 10;
       
    }
    return frequency + "/week";
}

function weeksBetween(minDate, maxDate) {
    return Math.round(maxDate - minDate) / (1000 * 60 * 60 * 24 * 7);
}

export function calculateFailRate(deployments, recoveryTimes) {
    if (deployments !== undefined && recoveryTimes !== undefined) {
      const numberOfIncidents = recoveryTimes.length;
      const numberOfDeployments = deployments.length;
      let rate = (numberOfIncidents * 100 / (numberOfDeployments == 0 ? 1 : numberOfDeployments));
      return Number.parseFloat(rate).toFixed() + "%";
    }
    return 0 + "%";
}

export function formatDate(date, time) {
    const utcSeconds = Date.parse(`${date} ${time}`) / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString("en-US");
}

export function formatTime(date, time) {
    const utcSeconds = Date.parse(`${date} ${time}`) / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleTimeString("en-US");
}

export function formatDateTime(date, time) {
    const utcSeconds = Date.parse(`${date} ${time}`) / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString("en-US") + " " + d.toLocaleTimeString("en-US");
}
