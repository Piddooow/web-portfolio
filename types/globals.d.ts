/**
 * Global Type Definitions for React, JSX, Motion, and Icons
 * Resolves all missing module and JSX intrinsic element diagnostics in VS Code / IDE.
 */

// --------------------------------------------------------------------------
// 1. React & JSX Runtime
// --------------------------------------------------------------------------
declare namespace JSX {
  interface Element extends React.ReactElement<any, any> {}
  interface ElementClass extends React.Component<any> {
    render(): React.ReactNode;
  }
  interface ElementAttributesProperty {
    props: {};
  }
  interface ElementChildrenAttribute {
    children: {};
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace NodeJS {
  interface Timeout {
    hasRef(): boolean;
    ref(): Timeout;
    refresh(): Timeout;
    unref(): Timeout;
    [Symbol.toPrimitive](): number;
  }
}

declare module 'react' {
  export type ReactNode =
    | React.ReactElement<any, any>
    | string
    | number
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
    | null
    | undefined;

  export type ElementType<P = any> =
    | { [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never }[keyof JSX.IntrinsicElements]
    | React.ComponentType<P>;

  export type ComponentType<P = {}> = React.ComponentClass<P> | React.FC<P>;

  export interface ComponentClass<P = {}, S = {}> {
    new (props: P, context?: any): React.Component<P, S>;
  }

  export class Component<P = {}, S = {}> {
    constructor(props: P, context?: any);
    props: Readonly<P>;
    state: Readonly<S>;
    render(): ReactNode;
  }

  export interface FC<P = {}> {
    (props: P, context?: any): ReactNode;
    propTypes?: any;
    contextTypes?: any;
    defaultProps?: Partial<P>;
    displayName?: string;
  }

  export interface FunctionComponent<P = {}> extends FC<P> {}

  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: any | null;
  }

  export type JSXElementConstructor<P> = ((props: P) => ReactNode) | (new (props: P) => Component<any, any>);

  export interface CSSProperties {
    [key: string]: any;
  }

  export interface HTMLAttributes<T> {
    [key: string]: any;
  }

  export interface SVGProps<T> {
    [key: string]: any;
  }

  export interface MouseEvent<T = Element> {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    target: EventTarget;
    currentTarget: EventTarget & T;
    preventDefault(): void;
    stopPropagation(): void;
  }

  export interface TouchEvent<T = Element> {
    touches: TouchList;
    targetTouches: TouchList;
    changedTouches: TouchList;
    target: EventTarget;
    currentTarget: EventTarget & T;
    preventDefault(): void;
    stopPropagation(): void;
  }

  export interface RefObject<T> {
    current: T;
  }

  export interface MutableRefObject<T> {
    current: T;
  }

  export function useState<S>(initialState: S | (() => S)): [S, (newState: S | ((prevState: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useLayoutEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[] | undefined): T;
  export function useRef<T>(initialValue: T): MutableRefObject<T>;
  export function useRef<T = undefined>(): MutableRefObject<T | undefined>;
  export function useId(): string;
  export function useContext<T>(context: any): T;
  export function useReducer<R extends (state: any, action: any) => any, I>(
    reducer: R,
    initializerArg: I,
    initializer?: (arg: I) => any
  ): [any, (action: any) => void];

  export const Fragment: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export function render(element: any, container: any, callback?: () => void): void;
  export function createPortal(children: any, container: any, key?: any): any;
  export default { render, createPortal };
}

declare module 'react-dom/client' {
  export interface Root {
    render(children: any): void;
    unmount(): void;
  }
  export function createRoot(container: Element | DocumentFragment, options?: any): Root;
  export function hydrateRoot(container: Element | DocumentFragment, initialChildren: any, options?: any): Root;
}

// --------------------------------------------------------------------------
// 2. Framer Motion & motion/react
// --------------------------------------------------------------------------
declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export function useAnimate(): [any, (selector: any, keyframes: any, options?: any) => Promise<any>];
  export function useMotionValue(initial: number): any;
  export function useTransform(value: any, input: any[], output: any[]): any;
  export function useSpring(source: any, config?: any): any;
  export type AnimationOptions = {
    duration?: number;
    delay?: number;
    ease?: any;
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    [key: string]: any;
  };
}

declare module 'motion/react' {
  export const motion: any;
  export const AnimatePresence: any;
  export function useAnimate(): [any, (selector: any, keyframes: any, options?: any) => Promise<any>];
  export function useMotionValue(initial: number): any;
  export function useTransform(value: any, input: any[], output: any[]): any;
  export function useSpring(source: any, config?: any): any;
  export type AnimationOptions = {
    duration?: number;
    delay?: number;
    ease?: any;
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    [key: string]: any;
  };
}

// --------------------------------------------------------------------------
// 3. Icons (react-icons, etc.)
// --------------------------------------------------------------------------
declare module 'react-icons' {
  export type IconType = (props: any) => any;
}

declare module 'react-icons/fa' {
  export const FaArrowLeft: (props: any) => any;
  export const FaArrowRight: (props: any) => any;
  export const FaArrowUp: (props: any) => any;
  export const FaArrowDown: (props: any) => any;
  export const FaGithub: (props: any) => any;
  export const FaLinkedin: (props: any) => any;
  export const FaInstagram: (props: any) => any;
  export const FaEnvelope: (props: any) => any;
  export const FaFileLines: (props: any) => any;
  export const FaCheck: (props: any) => any;
  export const FaChevronRight: (props: any) => any;
  export const FaTimes: (props: any) => any;
  [key: string]: any;
}

declare module 'lucide-react' {
  export const ArrowRight: (props: any) => any;
  export const ArrowLeft: (props: any) => any;
  export const ChevronRight: (props: any) => any;
  export const ChevronLeft: (props: any) => any;
  export const ExternalLink: (props: any) => any;
  [key: string]: any;
}

// --------------------------------------------------------------------------
// 4. CSS & Asset Modules
// --------------------------------------------------------------------------
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
