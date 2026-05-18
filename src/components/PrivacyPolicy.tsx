"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

export function PrivacyPolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="privacy"
      ref={ref}
      className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-secondary">§ 06</span>
          <h2
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Privacy Policy.
          </h2>
          <p
            className="mt-4 max-w-[540px] border-b border-border pb-7 font-serif text-lg italic leading-[1.5] text-secondary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Last updated: May 18, 2026
          </p>
        </div>

        <div
          className={`space-y-10 transition-all duration-700 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <PolicySection title="1. What we collect">
            <p>We collect only what is necessary to provide the service:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>
                <strong className="text-ink">Account information:</strong>{" "}
                Email address, display name, and account tokens used for
                authentication, Pro entitlements, sync, restore, export, and
                deletion.
              </li>
              <li>
                <strong className="text-ink">Profile and tuning choices:</strong>{" "}
                Category preferences, boundaries, context, difficulty
                preference, and the optional tailoring note you choose to save.
              </li>
              <li>
                <strong className="text-ink">Daily challenge data:</strong>{" "}
                Challenge offers, swaps, completions, completion dates, tiers,
                and categories.
              </li>
              <li>
                <strong className="text-ink">Optional content:</strong> Short
                journal notes and app-sized photo copies you choose to attach
                to completions.
              </li>
              <li>
                <strong className="text-ink">App settings and sparse events:</strong>{" "}
                Appearance, reminder settings, Pro status, and privacy-safe
                product events when analytics are enabled.
              </li>
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              We do not collect precise location data, device identifiers for
              advertising, contacts, health data, fitness data, or payment card
              details.
            </p>
          </PolicySection>

          <PolicySection title="2. Photos and camera">
            <p className="text-[15px] leading-[1.65] text-secondary">
              One New Thing may request access to your camera and photo library
              so you can attach photos to challenge completions. This is
              entirely optional. Photos are stored locally on your device by
              default as app-sized JPEG copies. Original photo files and
              original photo metadata are not stored in the journal record. If
              you subscribe to Pro and cloud photo backup is available, the app
              backs up those copied journal photos to private iCloud/CloudKit
              records. We do not browse, scan, or upload the rest of your photo
              library.
            </p>
          </PolicySection>

          <PolicySection title="3. How we use your data">
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>To provide the core service: daily challenges, history, and stats</li>
              <li>To sync your data across devices (Pro subscribers)</li>
              <li>To restore your journal when you sign in again</li>
              <li>To send optional daily and evening reminders (if enabled)</li>
              <li>To improve challenge quality and personalize recommendations</li>
              <li>To understand coarse product usage when analytics are enabled</li>
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              We do not use your journal notes, photos, account data, or events
              for advertising or ad targeting.
            </p>
          </PolicySection>

          <PolicySection title="4. Third parties">
            <p className="text-[15px] leading-[1.65] text-secondary">
              We use a minimal set of third-party services:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>
                <strong className="text-ink">Cloud infrastructure:</strong>{" "}
                Our backend runs on encrypted cloud infrastructure. Data is
                encrypted in transit (TLS) and at rest.
              </li>
              <li>
                <strong className="text-ink">Apple services:</strong> Sign in
                with Apple, private iCloud/CloudKit records, App Store
                subscriptions, and StoreKit transaction verification.
              </li>
              <li>
                <strong className="text-ink">Email delivery:</strong> If you
                choose email sign-in, we use an email provider to send your
                login code.
              </li>
              <li>
                <strong className="text-ink">Optional AI tailoring:</strong>{" "}
                When enabled, Mistral AI may process your optional tailoring
                note solely to derive recommendation signals. Journal notes,
                completion photos, and location are not sent for this purpose.
              </li>
              <li>
                <strong className="text-ink">Payment processing:</strong>{" "}
                Pro subscriptions are processed through the Apple App Store and
                StoreKit. We do not collect or store your payment information.
              </li>
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              We do not use advertising networks, social media tracking pixels,
              or third-party analytics SDKs.
            </p>
          </PolicySection>

          <PolicySection title="5. Data retention and deletion">
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>
                Local journal data remains on your device until you delete the
                app, sign out, remove it in the app, or delete your account.
              </li>
              <li>
                Backend account metadata is retained while your account is
                active. Sparse product events expire after 180 days.
              </li>
              <li>
                Pro iCloud sync and photo backup records are retained while
                sync is active, and may remain available for restore during the
                lapsed-Pro retention window shown in the app.
              </li>
              <li>
                You can export your local journal data and backend account
                metadata from app settings. Current exports include JSON/CSV
                records and photo metadata, but not photo files.
              </li>
              <li>
                You can delete your account from app settings. Deletion removes
                backend account metadata, revokes refresh access, clears local
                account data, and cleans up private iCloud records when
                available.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Security">
            <p className="text-[15px] leading-[1.65] text-secondary">
              We take reasonable measures to protect your data, including
              encryption in transit and at rest, passwordless authentication
              with Sign in with Apple or email login codes, and regular
              security reviews. However, no method of electronic storage is
              100% secure.
            </p>
          </PolicySection>

          <PolicySection title="7. Children's privacy">
            <p className="text-[15px] leading-[1.65] text-secondary">
              One New Thing is not intended for children under 13. We do not
              knowingly collect data from children under 13. If you believe we
              have inadvertently collected such data, please contact us
              immediately.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact us">
            <p className="text-[15px] leading-[1.65] text-secondary">
              If you have questions about this privacy policy or your data,
              please contact us at:{" "}
              <a
                href="mailto:hello@onenewthing.app"
                className="text-accent underline underline-offset-2"
              >
                hello@onenewthing.app
              </a>
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="mb-4 font-serif text-[22px] font-medium leading-[1.15] tracking-[-0.3px] text-ink"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h3>
      <div className="text-[15px] leading-[1.65]">{children}</div>
    </div>
  );
}
