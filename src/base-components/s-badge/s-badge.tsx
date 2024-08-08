import React, {CSSProperties, ReactNode} from "react";
import styles from "./s-badge.module.scss";
import {SFlex} from "../s-flex/s-flex";

export function SBadge(props: SBadgeProps) {
    return (
        <SFlex
            align={'center'}
            style={{
                border: props.border,
                background: props.background,
                color: props.color,
                boxShadow: props.boxShadow,
            }}
            className={styles.appBadge}
        >
            <p>{props.children}</p>
        </SFlex>
    );
}

export interface SBadgeProps {
    children?: ReactNode;
    background?: string;
    color?: string;
    boxShadow?: string;
    border?: string;
    highlighted?: boolean;
}