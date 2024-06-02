import React from "react";
import { CertItem } from "../types";

export const Cert: React.FC<CertItem> = ({ title, uri, badgeSrc }) => (
  <>
    <a href={uri}><img src={badgeSrc} />{title}</a>
  </>
)
