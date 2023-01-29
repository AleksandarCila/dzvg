import {FC} from "react";

import { ServiceType } from "./types";

type ServiceProps = {
  service: ServiceType;
};

export const Service:FC<ServiceProps> = ({service}) => {
  return <div>Service</div>;
};
