"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

type FilterType = "All" | "Soroban" | "Frontend" | "Assets" | "APIs" | "Security" | "Standards" | "ZK" | "Ecosystem";

const FILTERS: FilterType[] = ["All", "Soroban", "Frontend", "Assets", "APIs", "Security", "Standards", "ZK", "Ecosystem"];

type SkillCard = {
  title: string;
  description: string;
  pathLabel: string;
  copyValue: string;
  category: FilterType;
};

const SkillCards: SkillCard[] = [
  {
    title: "Stellar Development Skill",
    description:
      "Stellar Development Skill helps you build apps on Stellar using Soroban smart contracts, frontend integrations, and ecosystem tools.",
    pathLabel: "stellarskills.com/skill/SKILL.md",
    copyValue: "https://stellarskills.com/skill/SKILL.md",
    category: "All",
  },
  {
    title: "Build Smart Contracts",
    description:
      "Create Soroban contracts with Rust and WebAssembly.",
    pathLabel: "stellarskills.com/skills/soroban/contracts-soroban.md",
    copyValue: "https://stellarskills.com/skills/soroban/contracts-soroban.md",
    category: "Soroban",
  },
  {
    title: "Use Advanced Contract Patterns",
    description:
      "Apply scalable architecture and contract design patterns.",
    pathLabel: "stellarskills.com/skills/soroban/advanced-patterns.md",
    copyValue: "https://stellarskills.com/skills/soroban/advanced-patterns.md",
    category: "Soroban",
  },
  {
    title: "Avoid Common Pitfalls",
    description:
      "Prevent frequent errors in Soroban development flows.",
    pathLabel: "stellarskills.com/skills/soroban/common-pitfalls.md",
    copyValue: "https://stellarskills.com/skills/soroban/common-pitfalls.md",
    category: "Soroban",
  },
  {
    title: "Integrate Stellar in Frontend Apps",
    description:
      "Build app flows with Stellar SDK and wallet support.",
    pathLabel: "stellarskills.com/skills/frontend/frontend-stellar-sdk.md",
    copyValue: "https://stellarskills.com/skills/frontend/frontend-stellar-sdk.md",
    category: "Frontend",
  },
  {
    title: "Test Contract Logic",
    description:
      "No description yet.",
    pathLabel: "stellarskills.com/skills/soroban/testing.md",
    copyValue: "https://stellarskills.com/skills/soroban/testing.md",
    category: "Soroban",
  },
  {
    title: "Stellar Assets",
    description:
      "Stellar trustlines and assets—create, manage, authorize.",
    pathLabel: "stellarskills.com/skills/assets/stellar-assets.md",
    copyValue: "https://stellarskills.com/skills/assets/stellar-assets.md",
    category: "Assets",
  },
  {
    title: "API RPC Horizon",
    description:
      "Stellar APIs for network data—RPC, Horizon, and fetching accounts, transactions, and ledgers.",
    pathLabel: "stellarskills.com/skills/apis/api-rpc-horizon.md",
    copyValue: "https://stellarskills.com/skills/apis/api-rpc-horizon.md",
    category: "APIs",
  },
  {
    title: "Security",
    description:
      "Soroban smart contract security—vulnerabilities, access control, reentrancy.",
    pathLabel: "stellarskills.com/skills/security/security.md",
    copyValue: "https://stellarskills.com/skills/security/security.md",
    category: "Security",
  },
  {
    title: "Standards Reference",
    description:
      "Stellar SEPs and standards—implementations, interoperability, compliance.",
    pathLabel: "stellarskills.com/skills/standards/standards-reference.md",
    copyValue: "https://stellarskills.com/skills/standards/standards-reference.md",
    category: "Standards",
  },
  {
    title: "ZK Proofs",
    description:
      "Zero-knowledge proofs on Stellar—privacy transactions and Soroban verification.",
    pathLabel: "stellarskills.com/skills/zk/zk-proofs.md",
    copyValue: "https://stellarskills.com/skills/zk/zk-proofs.md",
    category: "ZK",
  },
  {
    title: "Ecosystem",
    description:
      "Stellar ecosystem tools and services. Covers anchors, wallets, exchanges, and third-party integrations.",
    pathLabel: "stellarskills.com/skills/ecosystem/ecosystem.md",
    copyValue: "https://stellarskills.com/skills/ecosystem/ecosystem.md",
    category: "Ecosystem",
  },
  {
    title: "Resources",
    description:
      "Curated resources for Stellar development. Covers documentation, tutorials, community channels, and developer tools.",
    pathLabel: "stellarskills.com/skills/ecosystem/resources.md",
    copyValue: "https://stellarskills.com/skills/ecosystem/resources.md",
    category: "Ecosystem",
  },
];

const EcosystemCards: SkillCard[] = [
  {
    title: "On/off-ramp integration",
    description:
      "Connect users to fiat banking rails via Stellar anchor services using SEP-24 and SEP-31.",
    pathLabel: "github.com/<provider>/SKILL.md",
    copyValue: "https://github.com/<provider>/SKILL.md",
    category: "Ecosystem",
  },
  {
    title: "Smart wallet / Smart account setup",
    description:
      "Build programmable smart accounts with multi-sig, spending limits, and account abstraction on Stellar.",
    pathLabel: "github.com/<project>/SKILL.md",
    copyValue: "https://github.com/<project>/SKILL.md",
    category: "Ecosystem",
  },
  {
    title: "USDC on Stellar",
    description:
      "Issue, transfer, and integrate Circle's USDC within Stellar apps and Soroban contracts.",
    pathLabel: "github.com/<project>/SKILL.md",
    copyValue: "https://github.com/<project>/SKILL.md",
    category: "Ecosystem",
  },
  {
    title: "Cross-chain bridging",
    description:
      "Bridge assets between Stellar and other blockchains using atomic swaps and lock-and-mint patterns.",
    pathLabel: "github.com/<project>/SKILL.md",
    copyValue: "https://github.com/<project>/SKILL.md",
    category: "Ecosystem",
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
  const searchParams = useSearchParams();
  const urlMode = searchParams.get("mode");
  const mode: ModeType = urlMode === "agent" ? "agent" : "human";

  const { setTheme } = useStore();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const activeModeContent = ModeContent[mode];

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
          <h1 className="SkillsLanding__title">Give your AI the right Stellar context before it writes code. Works with any AI agent.</h1>

          <div className="SkillsLanding__pill">
            <CopyPill
              value={activeModeContent.value}
              displayValue={activeModeContent.displayValue}
            />
          </div>
        </section>

        <section className="SkillsLanding__cards" aria-label="Skills list" data-fixed-height={activeFilter !== "All"}>
          {/* First card - always visible */}
          <Card key={SkillCards[0].title}>
            <div className="SkillsCard">
              <h2 className="SkillsCard__title">{SkillCards[0].title}</h2>

              <p className="SkillsCard__description">{SkillCards[0].description}</p>

              <CopyPathButton pathLabel={SkillCards[0].pathLabel} copyValue={SkillCards[0].copyValue} />
            </div>
          </Card>

          {/* Filter tabs */}
          <div className="SkillsLanding__filters" role="tablist" aria-label="Filter skills">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                className="SkillsLanding__filterTab"
                data-is-active={activeFilter === filter}
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Filtered skill cards */}
          {SkillCards.slice(1)
            .filter((c) => activeFilter === "All" || c.category === activeFilter)
            .slice(0, activeFilter === "All" ? undefined : 5)
            .map((c, idx) => (
              <Card key={`${c.title}-${idx}`}>
                <div className="SkillsCard">
                  <h2 className="SkillsCard__title">{c.title}</h2>

                  <p className="SkillsCard__description">{c.description}</p>

                  <CopyPathButton pathLabel={c.pathLabel} copyValue={c.copyValue} />
                </div>
              </Card>
            ))}
        </section>

        {/* Ecosystem section - always visible below skills */}
        <section className="SkillsLanding__ecosystem" aria-label="Ecosystem">
          <h2 className="SkillsLanding__sectionTitle">Ecosystem skills</h2>
          <p className="SkillsLanding__sectionDescription">
            Skills built and maintained by the Stellar community. The resources listed here are community-contributed and are not endorsed by the Stellar Foundation. Always do your own research (DYOR) before using any tool or resource. Inclusion in this list does not imply any warranty, security audit, or official recommendation. (Text TBD)
          </p>
          <div className="SkillsLanding__ecosystemGrid">
            {EcosystemCards.map((c, idx) => (
              <Card key={`ecosystem-${c.title}-${idx}`}>
                <div className="SkillsCard">
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
