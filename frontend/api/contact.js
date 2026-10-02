const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body ?? {};
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (
        !cleanName ||
        cleanName.length > 120 ||
        !emailPattern.test(cleanEmail) ||
        cleanEmail.length > 254 ||
        !cleanMessage ||
        cleanMessage.length > 5000
    ) {
        return res.status(400).json({ message: "Please check the submitted fields." });
    }

    const { RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL } = process.env;

    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
        console.error("Resend environment variables are not configured.");
        return res.status(500).json({ message: "Email service is not configured." });
    }

    try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: RESEND_FROM_EMAIL,
                to: [RESEND_TO_EMAIL],
                reply_to: cleanEmail,
                subject: "New portfolio contact message",
                text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
            }),
        });

        if (!resendResponse.ok) {
            console.error("Resend rejected a contact email:", resendResponse.status);
            return res.status(502).json({ message: "Failed to send message." });
        }

        return res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
        console.error("Contact email request failed:", error);
        return res.status(502).json({ message: "Failed to send message." });
    }
}