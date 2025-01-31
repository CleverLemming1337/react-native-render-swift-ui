import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface ButtonProps extends SwiftUIViewProperties {
  key: string;

  children: React.ReactNode;
}

/**
 * Displays a Swift UI button
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param key - The key under which the event is sent
 * @param children - The RNSwiftUI view that should be displayed as a button
 * @extends SwiftUIViewProperties
 *
 *
 *
 */
export const Button = (props: ButtonProps) => {
  return null;
};

export default Button;
