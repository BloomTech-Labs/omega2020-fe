import React from 'react';
import { stringify } from './stringify';

export function getDeepCopyOfArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}
