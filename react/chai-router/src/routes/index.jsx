// Tanstack
import { createFileRoute } from "@tanstack/react-router";
// Components
import App from "../App";
import { use_notification } from "../context/notification.context";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { add_notification } = use_notification();
  return (
    <div>
      <App />
      <button onClick={add_notification}>Update Notification's</button>
    </div>
  );
}
