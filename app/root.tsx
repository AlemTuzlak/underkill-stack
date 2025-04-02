import { Links, Meta, Outlet, Scripts } from "react-router";
import "#app/tailwind.css";
import "./reset.css.ts";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="text-6xl font-bold ">Hello world!</h1>
        </div>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
