export function generateProductCode() {
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();

  const time = Date.now().toString().slice(-5);

  return `PRD-${time}-${random}`;
}
