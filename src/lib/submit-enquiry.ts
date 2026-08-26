/**
 * Where the site's two forms go.
 *
 * Web3Forms is a plain HTTPS endpoint, so it behaves the same whoever hosts
 * the site — Netlify, Vercel, a VPS or anything else. Nothing here depends on
 * the host, which is the point: the forms used to be a Netlify platform
 * feature, and where this site will finally live is not settled.
 */
const ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Set NEXT_PUBLIC_WEB3FORMS_KEY on every environment. It is a public value —
 * Web3Forms describes it as an email alias, it can only deliver to the address
 * that registered it, and being NEXT_PUBLIC it is inlined into the client
 * bundle — so this is configuration rather than a secret. Web3Forms refuses
 * server-side calls on the free plan, so the browser has to carry it.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/** Filled by bots, left empty by people. */
const HONEYPOT = "company-website";

export type SubmitResult = "sent" | "failed";

/**
 * Sends a form and reports only what actually happened. A submission counts as
 * sent when the endpoint confirms it in the response body, never merely because
 * the request completed — Web3Forms answers 200 even when it rejects a key, and
 * a form that quietly swallows enquiries is worse than no form at all.
 */
export async function submitEnquiry(
  form: HTMLFormElement,
  { subject }: { subject: string },
): Promise<SubmitResult> {
  const data = new FormData(form);

  // A bot filled the hidden field. Report success and send nothing: telling it
  // that it failed only invites a retry.
  if (String(data.get(HONEYPOT) ?? "").trim() !== "") return "sent";
  data.delete(HONEYPOT);

  if (!ACCESS_KEY) {
    console.error("NEXT_PUBLIC_WEB3FORMS_KEY is not set — the forms cannot send.");
    return "failed";
  }

  // Repeated fields — the interest checkboxes — collapse to one readable line
  // rather than arriving as a single value with the rest dropped.
  const fields: Record<string, string> = {};
  for (const key of new Set(data.keys())) {
    fields[key] = data.getAll(key).map(String).join(", ");
  }

  const email = fields.email?.trim();

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...fields,
        access_key: ACCESS_KEY,
        subject,
        from_name: "INYVA website",
        ...(email ? { replyto: email } : {}),
      }),
    });

    const body = (await res.json()) as { success?: boolean };
    if (!res.ok || body.success !== true) throw new Error("rejected");

    return "sent";
  } catch {
    return "failed";
  }
}
