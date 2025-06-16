// Tanstack
import { createFileRoute } from "@tanstack/react-router";
import { use_notification } from "../../context/notification.context";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
  defaultPreload: "Intent",
});

function RouteComponent() {
  const { count } = use_notification();
  return (
    <>
      <div>Hello "/about/"!</div>
      <h1>Count is {count}</h1>
    </>
  );
}
