// archiving helpers for bus route planner for district transportation

export function archivingStep0(records, limit = 159) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep1(records, limit = 281) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep2(records, limit = 76) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep3(records, limit = 21) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep4(records, limit = 149) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep5(records, limit = 281) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep6(records, limit = 305) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep7(records, limit = 213) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep8(records, limit = 469) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep9(records, limit = 383) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
