export function getStartOf(date: Date, mode: string): Date {
  const result = new Date(date);

  switch (mode) {
    case "day":
      result.setHours(0, 0, 0, 0);
      break;

    case "week": {
      const day = result.getDay() || 7;
      result.setDate(result.getDate() - day + 1);
      result.setHours(0, 0, 0, 0);
      break;
    }

    case "month":
      result.setDate(1);
      result.setHours(0, 0, 0, 0);
      break;

    case "year":
      result.setMonth(0, 1);
      result.setHours(0, 0, 0, 0);
      break;

    case "total":
      return new Date(0);
  }

  return result;
}

export function getEndOf(date: Date, mode: string): Date {
  const result = new Date(date);

  switch (mode) {
    case "day":
      result.setHours(23, 59, 59, 999);
      break;

    case "week": {
      const day = result.getDay() || 7;
      result.setDate(result.getDate() + (7 - day));
      result.setHours(23, 59, 59, 999);
      break;
    }

    case "month":
      result.setMonth(result.getMonth() + 1, 0);
      result.setHours(23, 59, 59, 999);
      break;

    case "year":
      result.setFullYear(result.getFullYear() + 1, 0, 0);
      result.setHours(23, 59, 59, 999);
      break;

    case "total":
      return new Date();
  }

  return result;
}