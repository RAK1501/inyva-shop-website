/**
 * Where the site's two forms go.
 *
 * Web3Forms is a plain HTTPS endpoint, so it behaves the same whoever hosts
 * the site — Netlify, Vercel, a VPS or anything else. That is the whole point
 * of it: Netlify Forms only works on Netlify, and where this site will live
 * is not settled.
 *
 * The access key is meant to be public. It only permits delivery to the
 * address that registered it, so there is nothing here to leak.
 */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Set NEXT_PUBLIC_WEB3FORMS_KEY on the host. It is a public value — Web3Forms
 * describes it as an email alias, it can only deliver to the address that
 * registered it, and being NEXT_PUBLIC it is inlined into the client bundle —
 * so this is configuration rather than a secret. It lives outside the code so
 * it can be rotated, and so each environment can carry its own.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/**
 * Netlify's own form handler, kept as a mirror while the switch beds in. It
 * only works on Netlify and is never what the visitor's result depends on —
 * until an access key is configured, in which case it is all there is.
 */
const NETLIFY_ENDPOINT = "/__forms.html";

/** Filled by bots, left empty by people. */
const HONEYPOT = "company-website";

export type SubmitResult = "sent" | "failed";

/**
 * Sends a form and reports only what actually happened. A submission is
 * called sent when the endpoint confirms it and never merely because the
 * request completed — a form that quietly swallows enquiries is worse than
 * no form at all.
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
    // Not silent: without this the forms quietly depend on the host being
    // Netlify, which is the situation this endpoint exists to end.
    console.warn(
      "NEXT_PUBLIC_WEB3FORMS_KEY is not set — falling back to Netlify Forms, " +
        "which only works when Netlify is the host.",
    );
    return postToNetlify(data);
  }

  // Repeated fields — the interest checkboxes — collapse to one readable line
  // rather than arriving as a single value with the rest dropped.
  const fields: Record<string, string> = {};
  for (const key of new Set(data.keys())) {
    fields[key] = data.getAll(key).map(String).join(", ");
  }

  const email = fields.email?.trim();

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
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

    // The endpoint answers 200 with success:false for a rejected key, so the
    // body has to be read rather than trusting the status.
    const body = (await res.json()) as { success?: boolean };
    if (!res.ok || body.success !== true) throw new Error("rejected");

    void postToNetlify(data);
    return "sent";
  } catch {
    return "failed";
  }
}

/** Best effort, and silent: the visitor's result never hangs on this. */
async function postToNetlify(data: FormData): Promise<SubmitResult> {
  try {
    const body = new URLSearchParams(
      [...data].map(([k, v]) => [k, String(v)]),
    ).toString();

    const res = await fetch(NETLIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    return res.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
