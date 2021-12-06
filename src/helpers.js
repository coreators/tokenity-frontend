import React from 'react';

export function generate(element) {
  return [...Array(30).keys()].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
