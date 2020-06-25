import React from 'react';

export function flatten(a) {
  return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
}

export function getConflicts(arrs) {
  return arrs.map((arr) => getConflictsInArray(arr));
}

export function getConflictsInArray(arr) {
  const conflictMap = {};

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    if (curr.cellValue !== '.') {
      if (conflictMap.hasOwnProperty(curr.cellValue)) {
        conflictMap[curr.cellValue].push(curr.cellId);
      } else {
        conflictMap[curr.cellValue] = [curr.cellId];
      }
    }
  }

  return Object.values(conflictMap).filter((arr) => arr.length > 1);
}
