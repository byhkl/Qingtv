declare global {
  interface Window {
    LA: {
      init: (config: { id: string; ck: string }) => void;
    };
  }
}

export {} 