import crypto from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "admin_session";

function secret(): string {
  return process.env.ADMIN_PASSWORD || "";
}

/** Deterministic session token derived from the admin password. */
export function sessionToken(): string {
  return crypto
    .createHmac("sha256", secret())
    .update("portfolio-admin-v1")
    .digest("hex");
}

/**
 * Whether a password is required to use the admin.
 * True as soon as ADMIN_PASSWORD is configured.
 */
export function authRequired(): boolean {
  return !!process.env.ADMIN_PASSWORD;
}

/**
 * Is the current request authenticated?
 * - No password configured + local dev  → allowed (convenience).
 * - No password configured + on Vercel  → denied (fail closed).
 * - Password configured                 → valid session cookie required.
 */
export async function isAuthed(): Promise<boolean> {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return !process.env.VERCEL;

  const store = await cookies();
  const current = store.get(SESSION_COOKIE)?.value;
  if (!current) return false;

  const expected = sessionToken();
  const a = Buffer.from(current);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
