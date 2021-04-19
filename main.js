'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;
  init(targetHalfWidth, targetHalfHeight);
  addEventListener('resize', () => {
    init(targetHalfWidth, targetHalfHeight);
  });
  addEventListener('mousemove', e => {
    update(e, targetHalfWidth, targetHalfHeight);
  });
});

function init(targetHalfWidth, targetHalfHeight) {
  const windowHalfWidth = innerWidth / 2;
  const windowHalfHeight = innerHeight / 2;
  horizontal.style.transform = `translateY(${windowHalfHeight}px)`;
  vertical.style.transform = `translateX(${windowHalfWidth}px)`;
  target.style.transform = `translate(${windowHalfWidth - targetHalfWidth}px, ${
    windowHalfHeight - targetHalfHeight
  }px)`;
  coordinates.textContent = `${windowHalfWidth}px, ${windowHalfHeight}px`;
  coordinates.style.transform = `translate(${windowHalfWidth}px, ${windowHalfHeight}px)`;
}

function update(e, targetHalfWidth, targetHalfHeight) {
  const x = e.clientX;
  const y = e.clientY;
  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  target.style.transform = `translate(${x - targetHalfWidth}px, ${
    y - targetHalfHeight
  }px)`;
  coordinates.textContent = `${x}px, ${y}px`;
  coordinates.style.transform = `translate(${x}px, ${y}px)`;
}
