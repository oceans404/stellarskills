"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Badge,
  Button,
  Card,
  Icon,
  Logo,
  ThemeSwitch,
} from "@stellar/design-system";

import { useStore } from "@/store/useStore";
import { Hydration } from "@/components/Hydration";
import { LOCAL_STORAGE_SAVED_THEME } from "@/constants/settings";
import { ThemeColorType } from "@/types/types";

import "./styles.scss";

type ModeType = "human" | "agent";

const ModeContent: Record<ModeType, { value: string; displayValue?: string }> = {
  human: {
    value: "Read stellarskills.com before you start building on Stellar.",
  },
  agent: {
    value: "https://stellarskills.com/SKILL.md",
    displayValue: "stellarskills.com/SKILL.md",
  },
};

const SKILL_MD_CONTENT = `# Stellar Skills

Agent-readable documentation for building on the Stellar network.

## Available Skills

- Soroban: stellarskills.com/soroban/SKILL.md
- Wallets: stellarskills.com/wallets/SKILL.md
- Security: stellarskills.com/security/SKILL.md
- Testing: stellarskills.com/testing/SKILL.md
- Trustlines: stellarskills.com/trustlines/SKILL.md
- x402: stellarskills.com/x402/SKILL.md
- MPP: stellarskills.com/mpp/SKILL.md

## Usage

Fetch any skill file to get detailed, up-to-date context for your AI agent.
`;

type SkillCard = {
  title: string;
  description: string;
  pathLabel: string;
  copyValue: string;
};

const SkillCards: SkillCard[] = [
  {
    title: "Soroban",
    description:
      "Stellar's smart contract platform built on WebAssembly. Covers writing, testing, and deploying Rust contracts — storage types, auth patterns, and cross-contract calls. The foundation for building dApps on Stellar.",
    pathLabel: "stellarskills.com/soroban/SKILL.md",
    copyValue: "https://stellarskills.com/soroban/SKILL.md",
  },
  {
    title: "Wallets",
    description:
      "Everything for integrating Stellar wallets into your app. Covers Freighter connection, transaction signing flows, SEP-7 URI schemes, and account management. Build seamless wallet experiences for your Stellar users.",
    pathLabel: "stellarskills.com/wallets/SKILL.md",
    copyValue: "https://stellarskills.com/wallets/SKILL.md",
  },
  {
    title: "Security",
    description:
      "Best practices for securing Soroban smart contracts. Covers common vulnerabilities, access control patterns, and reentrancy protection. Write audit-ready code from the start.",
    pathLabel: "stellarskills.com/security/SKILL.md",
    copyValue: "https://stellarskills.com/security/SKILL.md",
  },
  {
    title: "Testing",
    description:
      "Testing Soroban contracts end-to-end on Stellar. Covers unit tests, integration tests, and using the Stellar test SDK. Catch bugs before deployment with confidence.",
    pathLabel: "stellarskills.com/testing/SKILL.md",
    copyValue: "https://stellarskills.com/testing/SKILL.md",
  },
  {
    title: "Trustlines",
    description:
      "How Stellar trustlines work under the hood. Covers creating, managing, and authorizing asset trustlines for tokens and custom assets. Essential for any token-based app.",
    pathLabel: "stellarskills.com/trustlines/SKILL.md",
    copyValue: "https://stellarskills.com/trustlines/SKILL.md",
  },
  {
    title: "x402",
    description:
      "Stellar's HTTP payment protocol for machine-to-machine payments. Covers implementing paid API access, request authentication, and micropayment flows. Built for AI agents and automated systems.",
    pathLabel: "stellarskills.com/x402/SKILL.md",
    copyValue: "https://stellarskills.com/x402/SKILL.md",
  },
  {
    title: "MPP",
    description:
      "Stellar's Multi-Party Payment standard for splitting and routing payments. Covers payment path construction, multi-destination transfers, and fee handling. Optimizes cost and reliability of complex payment flows.",
    pathLabel: "stellarskills.com/mpp/SKILL.md",
    copyValue: "https://stellarskills.com/mpp/SKILL.md",
  },
];

const EcosystemCards: SkillCard[] = [
  {
    title: "On/off-ramp integration",
    description:
      "Connect users to fiat banking rails via Stellar anchor services using SEP-24 and SEP-31.",
    pathLabel: "github.com/<provider>/SKILL.md",
    copyValue: "https://github.com/<provider>/SKILL.md",
  },
  {
    title: "Smart wallet / Smart account setup",
    description:
      "Build programmable smart accounts with multi-sig, spending limits, and account abstraction on Stellar.",
    pathLabel: "github.com/<project>/SKILL.md",
    copyValue: "https://github.com/<project>/SKILL.md",
  },
  {
    title: "USDC on Stellar",
    description:
      "Issue, transfer, and integrate Circle's USDC within Stellar apps and Soroban contracts.",
    pathLabel: "github.com/<project>/SKILL.md",
    copyValue: "https://github.com/<project>/SKILL.md",
  },
  {
    title: "Cross-chain bridging",
    description:
      "Bridge assets between Stellar and other blockchains using atomic swaps and lock-and-mint patterns.",
    pathLabel: "github.com/<project>/SKILL.md",
    copyValue: "https://github.com/<project>/SKILL.md",
  },
];

const CopyPill = ({
  value,
  displayValue,
}: {
  value: string;
  displayValue?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="SkillsCopyPill__wrapper">
      <button
        type="button"
        className="SkillsCopyPill"
        onClick={handleCopy}
        aria-label="Copy"
        data-copied={copied}
      >
        <span className="SkillsCopyPill__text">{displayValue ?? value}</span>
        <span className="SkillsCopyPill__copyIcon">
          {copied ? <Icon.CheckCircle /> : <Icon.Copy01 />}
        </span>
      </button>
    </div>
  );
};

const CopyPathButton = ({
  pathLabel,
  copyValue,
}: {
  pathLabel: string;
  copyValue: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="SkillsCard__pathWrapper">
      <button
        type="button"
        className="SkillsCard__pathButton"
        onClick={handleCopy}
        data-copied={copied}
      >
        <span className="SkillsCard__pathText">{pathLabel}</span>
        {copied ? <Icon.CheckCircle /> : <Icon.Copy01 />}
      </button>
    </div>
  );
};

export default function LandingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlMode = searchParams.get("mode");
  const mode: ModeType = urlMode === "agent" ? "agent" : "human";

  const { setTheme } = useStore();

  const activeModeContent = ModeContent[mode];

  const handleModeChange = (newMode: ModeType) => {
    if (newMode === "agent") {
      router.push("/landing?mode=agent");
    } else {
      router.push("/landing");
    }
  };

  // Make sure we always have the theme set in the store
  useEffect(() => {
    const attr = "data-sds-theme";
    const getVal = () => document.body.getAttribute(attr);

    const currentTheme = getVal();

    if (currentTheme) {
      setTheme(currentTheme as ThemeColorType);
      return;
    }

    const observer = new MutationObserver(() => {
      const theme = getVal();

      if (theme) {
        observer.disconnect();
        setTheme(theme as ThemeColorType);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [attr],
    });

    return () => {
      observer.disconnect();
    };
  }, [setTheme]);

  const handleThemeChange = (isDarkMode: boolean) => {
    const theme = isDarkMode ? "sds-theme-dark" : "sds-theme-light";
    setTheme(theme);
  };

  // Agent mode: show raw SKILL.md content only
  if (mode === "agent") {
    return (
      <div className="SkillsLanding__agentView">
        <pre className="SkillsLanding__agentContent">{SKILL_MD_CONTENT}</pre>
      </div>
    );
  }

  return (
    <div className="SkillsLanding">
      <header className="SkillsLanding__header">
        <div className="SkillsLanding__logo">
          <Logo.Stellar />
          <Badge variant="secondary" size="md">Skills</Badge>
        </div>

        <div className="SkillsLanding__headerActions">
          <Hydration>
            <ThemeSwitch
              storageKeyId={LOCAL_STORAGE_SAVED_THEME}
              onActionEnd={handleThemeChange}
            />
          </Hydration>

          <Button
            variant="tertiary"
            size="md"
            icon={<Icon.LinkExternal01 />}
            iconPosition="right"
            onClick={() => window.open("https://developers.stellar.org/docs", "_blank", "noopener,noreferrer")}
          >
            Developer docs
          </Button>
        </div>
      </header>

      <main className="SkillsLanding__main">
        <section className="SkillsLanding__hero">
          <h1 className="SkillsLanding__title">Stellar Skills</h1>
          <p className="SkillsLanding__subtitle">
            Give your AI the right Stellar context before it writes code. Works with any AI agent.
          </p>

          <div className="SkillsLanding__modeToggle" role="tablist" aria-label="View mode">
            <button
              type="button"
              role="tab"
              className="SkillsLanding__modeButton"
              data-is-active={true}
              aria-selected={true}
              onClick={() => handleModeChange("human")}
            >
              <Icon.User01 />
              <span>Human</span>
            </button>
            <button
              type="button"
              role="tab"
              className="SkillsLanding__modeButton"
              data-is-active={false}
              aria-selected={false}
              onClick={() => handleModeChange("agent")}
            >
              <Icon.Code02 />
              <span>Agent</span>
            </button>
          </div>

          <div className="SkillsLanding__pill">
            <CopyPill
              value={activeModeContent.value}
              displayValue={activeModeContent.displayValue}
            />
          </div>
        </section>

        <section className="SkillsLanding__cards" aria-label="Skills list">
          {SkillCards.map((c, idx) => (
            <Card key={`${c.title}-${idx}`}>
              <div className="SkillsCard">
                <Badge variant="secondary" size="sm">Badge</Badge>
                <h2 className="SkillsCard__title">{c.title}</h2>

                <p className="SkillsCard__description">{c.description}</p>

                <CopyPathButton pathLabel={c.pathLabel} copyValue={c.copyValue} />
              </div>
            </Card>
          ))}
        </section>

        <section className="SkillsLanding__ecosystem" aria-label="Ecosystem">
          <h2 className="SkillsLanding__sectionTitle">Ecosystem skills</h2>
          <div className="SkillsLanding__ecosystemGrid">
            {EcosystemCards.map((c, idx) => (
              <Card key={`ecosystem-${c.title}-${idx}`}>
                <div className="SkillsCard">
                  <Badge variant="secondary" size="sm">Badge</Badge>
                  <h3 className="SkillsCard__title">{c.title}</h3>

                  <p className="SkillsCard__description">{c.description}</p>

                  <CopyPathButton pathLabel={c.pathLabel} copyValue={c.copyValue} />
                </div>
              </Card>
            ))}
          </div>
        </section>

      </main>

      <footer className="SkillsLanding__footer">
        <span className="SkillsLanding__footerText">
          Powered by{" "}
          <a
            href="https://stellar.org"
            target="_blank"
            rel="noopener noreferrer"
            className="SkillsLanding__footerLink"
          >
            Stellar
          </a>
        </span>
      </footer>
    </div>
  );
}
