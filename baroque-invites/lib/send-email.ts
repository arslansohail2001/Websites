import { Resend } from "resend";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  cardsRequired: string;
  message: string;
  fileBase64?: string;
  fileName?: string;
  fileType?: string;
}

const cardLabels: Record<string, string> = {
  "50-100": "50 – 100 Cards",
  "100-200": "100 – 200 Cards",
  "200+": "200+ Cards",
  "budget": "Depends on Budget",
  "not-sure": "Not Sure Yet",
};

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("⚠️  RESEND_API_KEY not set. Email would have been sent with:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      cardsRequired: data.cardsRequired,
    });
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const html = `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"/></head>
      <body style="margin:0;padding:0;font-family:'Poppins',Arial,sans-serif;background:#f5f5f5;">
        <div style="max-width:600px;margin:0 auto;background:#ffffff;">
          <div style="background:#C9A84C;padding:32px 40px;text-align:center;">
            <h1 style="color:#ffffff;font-family:Georgia,serif;font-size:28px;margin:0;font-weight:400;letter-spacing:2px;">Baroque Invites</h1>
            <p style="color:#ffffff;opacity:0.9;margin:8px 0 0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">New Inquiry Received</p>
          </div>
          <div style="padding:40px;">
            <h2 style="color:#1A1A1A;font-family:Georgia,serif;font-size:22px;margin:0 0 24px;font-weight:400;">Inquiry from ${data.name}</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 16px;background:#FAF7F2;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6B6B6B;width:35%;font-weight:500;">Name</td>
                <td style="padding:12px 16px;font-size:14px;color:#1A1A1A;">${data.name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 16px;background:#FAF7F2;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6B6B6B;font-weight:500;">Phone</td>
                <td style="padding:12px 16px;font-size:14px;color:#1A1A1A;">${data.phone}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 16px;background:#FAF7F2;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6B6B6B;font-weight:500;">Email</td>
                <td style="padding:12px 16px;font-size:14px;color:#1A1A1A;">${data.email}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 16px;background:#FAF7F2;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6B6B6B;font-weight:500;">Cards Required</td>
                <td style="padding:12px 16px;font-size:14px;color:#1A1A1A;">${cardLabels[data.cardsRequired] || data.cardsRequired}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#FAF7F2;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#6B6B6B;font-weight:500;vertical-align:top;">Message</td>
                <td style="padding:12px 16px;font-size:14px;color:#1A1A1A;line-height:1.6;">${data.message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
            ${data.fileBase64 ? `<p style="margin-top:20px;font-size:13px;color:#6B6B6B;">📎 Reference image attached: <strong>${data.fileName}</strong></p>` : ""}
          </div>
          <div style="background:#0F0F0F;padding:24px 40px;text-align:center;">
            <p style="color:#6B6B6B;font-size:12px;margin:0;">© 2025 Baroque Invites · baroqueinvites.com</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const attachments =
    data.fileBase64 && data.fileName
      ? [{ filename: data.fileName, content: data.fileBase64 }]
      : [];

  try {
    const result = await resend.emails.send({
      from: "Baroque Invites <noreply@baroqueinvites.com>",
      to: ["hello@baroqueinvites.com"],
      subject: `New Inquiry from ${data.name} — ${cardLabels[data.cardsRequired] || data.cardsRequired}`,
      html,
      attachments,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false };
    }
    return { success: true };
  } catch (err) {
    console.error("Email send failed:", err);
    return { success: false };
  }
}

