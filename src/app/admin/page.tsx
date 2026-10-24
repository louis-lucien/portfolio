import { redirect } from "next/navigation";

// /admin → canonical first section.
export default function AdminIndex() {
  redirect("/admin/personal");
}
