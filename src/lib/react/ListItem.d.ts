import { CSSProperties, ReactElement, ReactNode } from "react";
import { ListResizer } from "../core/resizer";
/**
 * Props of customized item component for {@link VList}.
 */
export interface CustomItemComponentProps {
    style: CSSProperties;
    children: ReactNode;
}
export type CustomItemComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>>;
type ListItemProps = {
    _children: ReactNode;
    _resizer: ListResizer;
    _index: number;
    _offset: number;
    _hide: boolean;
    _element: "div";
    _isHorizontal: boolean;
};
export declare const ListItem: import("react").MemoExoticComponent<({ _children: children, _resizer: resizer, _index: index, _offset: offset, _hide: hide, _element: Element, _isHorizontal: isHorizontal, }: ListItemProps) => ReactElement>;
export {};
