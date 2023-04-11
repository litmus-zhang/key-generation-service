import crypto from "crypto";

export async function generateApiKey(): Promise<string> {
    const value = crypto.randomBytes(20).toString('hex');
    return value;
}