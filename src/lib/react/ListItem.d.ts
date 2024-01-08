import { CSSProperties, ReactNode } from "react";
/**
 * Props of customized item component for {@link Virtualizer} or {@link WindowVirtualizer}.
 */
export interface CustomItemComponentProps {
    style: CSSProperties;
    index: number;
    children: ReactNode;
}
export type CustomItemComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>>;
