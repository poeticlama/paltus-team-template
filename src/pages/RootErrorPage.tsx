import {isRouteErrorResponse, useRouteError} from "react-router";

const RootErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return <h1>{error.status} {error.statusText}</h1>;
    }

    return <>some error occurred</>;
};

export default RootErrorPage;
