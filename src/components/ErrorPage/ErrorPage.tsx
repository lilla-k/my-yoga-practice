import { useRouteError } from "react-router";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="ErrorPage">
      <div className="ErrorPage-textContainer">
        <h1>Oops!</h1>
        <p>We are sorry, but an unexpected error has occurred.</p>
        <p>
          <i>{error instanceof Error ? error.message : 'unknown error'}</i>
        </p>
      </div>
    </div>
  );
}