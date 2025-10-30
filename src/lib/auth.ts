import crypto from "node:crypto";

const SECRET = process.env.AUTH_SECRET || "dev-secret-change";

const b64url = (buf: Buffer) =>
  buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");

export function signToken(payload: Record<string, unknown>) {
  const b64 = b64url(Buffer.from(JSON.stringify(payload)));
  const sig = crypto.createHmac("sha256", SECRET).update(b64).digest("base64url");
  return `${b64}.${sig}`;
}

export function verifyToken(token: string) {
  try {
    const [b64, sig] = token.split(".");
    if (!b64 || !sig) return null;
    const expected = crypto.createHmac("sha256", SECRET).update(b64).digest("base64url");
    if (sig !== expected) return null;
    const json = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
    if (json.exp && Date.now() > Number(json.exp)) return null;
    return json as { u: string; exp?: number };
  } catch {
    return null;
  }
}