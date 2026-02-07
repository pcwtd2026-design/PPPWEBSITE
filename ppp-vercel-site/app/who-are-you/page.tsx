import Shell from "@/components/Shell";

export default function WhoAreYou() {
  return (
    <Shell active="/who-are-you">
      <div className="copy centerBlock">
        <p>Please tell us who you are, simply drop us an email</p>
        <a className="emailLink" href="mailto:pcwtd2026@gmail.com">pcwtd2026@gmail.com</a>
        <p style={{ marginTop: "14px" }}>
          No matter where you may be in the filmmaking process, we want to hear from you. Whether you're at the initial
          concept stage, deep in production, or editing the final cut, reach out to us.
        </p>
      </div>
    </Shell>
  );
}
