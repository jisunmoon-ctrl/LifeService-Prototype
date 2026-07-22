import { createContext, useContext, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type PrototypeOverlayScope = 'frame' | 'viewport';

interface PrototypeOverlayProviderProps {
  children: ReactNode;
  scope?: PrototypeOverlayScope;
}

const PrototypeOverlayContext = createContext<HTMLElement | null | undefined>(
  undefined,
);

export function PrototypeOverlayProvider({
  children,
  scope = 'viewport',
}: PrototypeOverlayProviderProps): JSX.Element {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const hostStyle: CSSProperties =
    scope === 'frame'
      ? {
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }
      : {
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1000,
        };

  return (
    <PrototypeOverlayContext.Provider value={container}>
      {children}
      <div
        id="prototype-overlay-root"
        ref={setContainer}
        style={hostStyle}
      />
    </PrototypeOverlayContext.Provider>
  );
}

export function usePrototypeOverlayContainer(): HTMLElement | undefined {
  const container = useContext(PrototypeOverlayContext);
  return container ?? undefined;
}

export function usePrototypeOverlayContainerState():
  | HTMLElement
  | null
  | undefined {
  return useContext(PrototypeOverlayContext);
}
