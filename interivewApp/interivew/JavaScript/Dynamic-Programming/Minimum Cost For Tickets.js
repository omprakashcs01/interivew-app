function minTravelCost(days, costs) {
  const lastDay = days[days.length - 1];
  const t = new Array(lastDay + 1).fill(0);

  t[0] = 0;

  for (let i = 1; i <= lastDay; i++) {
    // Check if there's travel planned for this day
    if (!days.includes(i)) {
      t[i] = t[i - 1];
      continue;
    }

    t[i] = Number.MAX_SAFE_INTEGER; // Set to positive infinity

    const day1PassCost = costs[0] + t[Math.max(i - 1, 0)];
    const day7PassCost = costs[1] + t[Math.max(i - 7, 0)];
    const day30PassCost = costs[2] + t[Math.max(i - 30, 0)];

    t[i] = Math.min(day1PassCost, day7PassCost, day30PassCost);
  }

  return t[lastDay];
}
