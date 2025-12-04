import type {ReactNode} from "react";

type PrivateRouteProps = {
    children?: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    return <>{children}</>
}

export default PrivateRoute;
