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
            Last updated: May 17, 2026
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
                <strong className="text-ink">Account information:</strong> Email address
                and display name, used for authentication and cloud sync.
              </li>
              <li>
                <strong className="text-ink">Challenge data:</strong> Which
                challenges you complete, when you complete them, and which tier
                they belong to.
              </li>
              <li>
                <strong className="text-ink">Optional content:</strong> Short
                text notes and photos you choose to attach to completions.
              </li>
              <li>
                <strong className="text-ink">Preferences:</strong> App
                settings such as dark mode, notification preferences, and
                challenge category filters.
              </li>
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              We do not collect precise location data, device identifiers for
              advertising, or any health or fitness data.
            </p>
          </PolicySection>

          <PolicySection title="2. Photos and camera">
            <p className="text-[15px] leading-[1.65] text-secondary">
              One New Thing may request access to your camera and photo library
              so you can attach photos to challenge completions. This is
              entirely optional. Photos are stored locally on your device by
              default. If you subscribe to Pro and enable cloud sync, photos are
              backed up to our secure cloud storage. We do not access your photo
              library for any purpose other than saving the specific photos you
              choose to attach.
            </p>
          </PolicySection>

          <PolicySection title="3. How we use your data">
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>To provide the core service: daily challenges, history, and stats</li>
              <li>To sync your data across devices (Pro subscribers)</li>
              <li>To send optional daily and evening reminders (if enabled)</li>
              <li>To improve challenge quality and relevance over time</li>
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              We do not use your data for advertising, profiling, or any
              automated decision-making that affects your rights.
            </p>
          </PolicySection>

          <PolicySection title="4. Third parties">
            <p className="text-[15px] leading-[1.65] text-secondary">
              We use a minimal set of third-party services:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>
                <strong className="text-ink">Cloud infrastructure:</strong>{" "}
                Our backend runs on encrypted cloud servers. Data is encrypted
                in transit (TLS) and at rest.
              </li>
              <li>
                <strong className="text-ink">Payment processing:</strong>{" "}
                Pro subscriptions are processed through Apple's App Store and
                StoreKit. We do not collect or store your payment information.
              </li>
            </ul>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              We do not use analytics SDKs, advertising networks, or social
              media tracking pixels.
            </p>
          </PolicySection>

          <PolicySection title="5. Data retention and deletion">
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-secondary">
              <li>
                Local data remains on your device until you delete the app.
              </li>
              <li>
                Cloud data is retained while your account is active. If you
                delete your account, all associated cloud data is permanently
                removed within 30 days.
              </li>
              <li>
                You can export your data at any time from the app settings.
              </li>
              <li>
                You can request complete deletion by contacting us (see Section
                8).
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Security">
            <p className="text-[15px] leading-[1.65] text-secondary">
              We take reasonable measures to protect your data, including
              encryption in transit and at rest, secure authentication, and
              regular security reviews. However, no method of electronic
              storage is 100% secure. We encourage you to use a strong,
              unique password for your account.
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
