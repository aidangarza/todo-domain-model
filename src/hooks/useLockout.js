// In the style of useRef, the locks variable has a
// current property which is an object that will
// store the current lockout state of different features
const locks = {
  current: {}
};

export default function useLockout(feature) {
  const lockout = (shouldLock = true) => {
    locks.current[feature] = shouldLock;
  };

  return [
    () => locks.current[feature],
    lockout
  ]
}