"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  FiUser,
  FiFileText,
  FiBriefcase,
  FiAward,
  FiImage,
  FiCode,
  FiSave,
  FiCheck,
  FiAlertCircle,
  FiPlus,
  FiTrash2,
  FiRefreshCw,
  FiLoader,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

// ─── Types ───────────────────────────────────────────────────
interface PersonalData {
  firstName: string;
  lastName: string;
  initials: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string[];
  values: string[];
  languages: string[];
  socials: { github: string; linkedin: string; twitter: string };
}

interface HeroData {
  greeting: string;
  subtitle: string;
  roles: string[];
  cta: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
}

interface CertItem {
  name: string;
  issuer: string;
  date: string;
  highlight: boolean;
  image?: string;
}

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
  featured: boolean;
  image?: string;
}

interface FormationItem {
  degree: string;
  speciality: string;
  school: string;
  period: string;
  description: string;
}

interface TraitItem {
  letter: string;
  name: string;
  value: number;
}

interface PillarItem {
  title: string;
  icon: string;
  description: string;
}

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  items: SkillItem[];
}

type Tab = "personal" | "hero" | "pillars" | "skills" | "experience" | "formation" | "projects" | "certifications" | "images";

// ─── Component ───────────────────────────────────────────────
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("personal");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [rawConfig, setRawConfig] = useState("");

  // Data states
  const [personal, setPersonal] = useState<PersonalData>({
    firstName: "", lastName: "", initials: "", title: "", tagline: "",
    email: "", phone: "", location: "",
    bio: ["", "", ""], values: [], languages: [],
    socials: { github: "", linkedin: "", twitter: "" },
  });
  const [heroData, setHeroData] = useState<HeroData>({
    greeting: "", subtitle: "", roles: [""], cta: "",
  });
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [formations, setFormations] = useState<FormationItem[]>([]);
  const [projectItems, setProjectItems] = useState<ProjectItem[]>([]);
  const [certs, setCerts] = useState<CertItem[]>([]);
  const [profileTypeDesc, setProfileTypeDesc] = useState("Esprit stratégique, analytique, visionnaire. L'INTJ-A ne se contente pas de résoudre des problèmes — il les anticipe et conçoit des systèmes pour les prévenir.");
  const [traits, setTraits] = useState<TraitItem[]>([
    { letter: "I", name: "Introverti", value: 78 },
    { letter: "N", name: "Intuitif", value: 85 },
    { letter: "T", name: "Penseur", value: 82 },
    { letter: "J", name: "Jugement", value: 88 },
  ]);
  const [aboutVision, setAboutVision] = useState("Construire des systèmes intelligents qui transforment la donnée brute en décisions stratégiques — du capteur au tableau de bord.");
  const [pillars, setPillars] = useState<PillarItem[]>([
    { title: "Software Engineering", icon: "code", description: "" },
    { title: "Data Engineering", icon: "database", description: "" },
    { title: "Intelligence Artificielle", icon: "brain", description: "" },
  ]);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [skillChainSteps, setSkillChainSteps] = useState<string[]>(["Collecte", "Traitement", "Analyse", "Exploitation"]);
  const [showLevels, setShowLevels] = useState(false);
  const [showProfileType, setShowProfileType] = useState(true);
  const [showPillars, setShowPillars] = useState(true);
  const [showTraitValues, setShowTraitValues] = useState(true);

  const [uploadingTo, setUploadingTo] = useState<string | null>(null);
  const [images, setImages] = useState<Record<string, string[]>>({ profile: [], certs: [], projects: [] });
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToNew = () => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  };

  // ─── Load config on mount ──────────────────────────────────
  const loadConfig = useCallback(async () => {
    setLoading(true);
    try {
      const [configRes, imagesRes] = await Promise.all([
        fetch("/api/config"),
        fetch("/api/upload"),
      ]);
      const configData = await configRes.json();
      const imagesData = await imagesRes.json();

      if (configData.data) {
        const d = configData.data;
        if (d.personal) {
          setPersonal({
            ...d.personal,
            bio: d.personal.bio || ["", "", ""],
            values: d.personal.values || [],
            languages: d.personal.languages || [],
            socials: d.personal.socials || { github: "", linkedin: "", twitter: "" },
          });
        }
        if (d.hero) setHeroData(d.hero);
        if (d.experience?.items) setExperiences(d.experience.items);
        if (d.formation?.items) setFormations(d.formation.items);
        if (d.projects?.items) setProjectItems(d.projects.items);
        if (d.certifications?.items) setCerts(d.certifications.items);
        if (d.about?.profileType?.description) setProfileTypeDesc(d.about.profileType.description);
        if (d.about?.profileType?.traits) setTraits(d.about.profileType.traits);
        if (d.about?.vision) setAboutVision(d.about.vision);
        if (d.about?.pillars) setPillars(d.about.pillars);
        if (d.about?.showProfileType !== undefined) setShowProfileType(d.about.showProfileType);
        if (d.about?.showPillars !== undefined) setShowPillars(d.about.showPillars);
        if (d.about?.showTraitValues !== undefined) setShowTraitValues(d.about.showTraitValues);
        if (d.skills?.categories) setSkillCategories(d.skills.categories);
        if (d.skills?.chain?.steps) setSkillChainSteps(d.skills.chain.steps);
        if (d.skills?.showLevels !== undefined) setShowLevels(d.skills.showLevels);
      }
      if (imagesData && !imagesData.error) {
        setImages(imagesData);
      }
    } catch {
      setError("Impossible de charger la configuration");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadConfig(); }, [loadConfig]);

  // ─── Upload image ──────────────────────────────────────────
  async function handleUpload(file: File, destination: string) {
    setUploadingTo(destination);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("destination", destination);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        // Reload images list
        const imagesRes = await fetch("/api/upload");
        const imagesData = await imagesRes.json();
        if (!imagesData.error) setImages(imagesData);
        return data.path;
      }
    } catch {
      setError("Erreur lors de l'upload");
    } finally {
      setUploadingTo(null);
    }
    return null;
  }

  // ─── Generate config string from state ─────────────────────
  function generateConfig(): string {
    const stringify = (obj: unknown, indent = 2) => {
      return JSON.stringify(obj, null, indent)
        .replace(/"(\w+)":/g, "$1:")
        .replace(/"/g, '"')
        .replace(/\\"/g, '"');
    };

    const q = (s: string) => `"${s.replace(/"/g, '\\"')}"`;
    const arrStr = (arr: string[]) => `[${arr.map(q).join(", ")}]`;

    return `// ============================================================
//  PORTFOLIO — CONFIGURATION CENTRALISÉE
//  Modifié depuis l'interface admin
// ============================================================

export const personal = {
  firstName: ${q(personal.firstName)},
  lastName: ${q(personal.lastName)},
  initials: ${q(personal.initials)},
  title: ${q(personal.title)},
  tagline: ${q(personal.tagline)},
  email: ${q(personal.email)},
  phone: ${q(personal.phone)},
  location: ${q(personal.location)},
  bio: [
${personal.bio.map((b) => `    ${q(b)},`).join("\n")}
  ],
  values: [
${personal.values.map((v) => `    ${q(v)},`).join("\n")}
  ],
  languages: ${arrStr(personal.languages)},
  socials: {
    github: ${q(personal.socials.github)},
    linkedin: ${q(personal.socials.linkedin)},
    twitter: ${q(personal.socials.twitter)},
  },
};

export const hero = {
  greeting: ${q(heroData.greeting)},
  subtitle: ${q(heroData.subtitle)},
  roles: ${arrStr(heroData.roles)},
  cta: ${q(heroData.cta)},
};

export const about = {
  heading: "Qui suis-je",
  showProfileType: ${showProfileType},
  showPillars: ${showPillars},
  showTraitValues: ${showTraitValues},
  profileType: {
    description: ${q(profileTypeDesc)},
    traits: [
${traits.map((t) => `      { letter: ${q(t.letter)}, name: ${q(t.name)}, value: ${t.value} },`).join("\n")}
    ],
  },
  vision: ${q(aboutVision)},
  pillars: [
${pillars.map((p) => `    { title: ${q(p.title)}, icon: ${q(p.icon)}, description: ${q(p.description)} },`).join("\n")}
  ],
};

export const skills = {
  heading: "Expertise Technique",
  showLevels: ${showLevels},
  chain: {
    title: "La chaîne de valeur Data",
    steps: ${arrStr(skillChainSteps)},
  },
  categories: [
${skillCategories.map((cat) => `    {
      title: ${q(cat.title)},
      icon: ${q(cat.icon)},
      items: [
${cat.items.map((item) => `        { name: ${q(item.name)}, level: ${item.level} },`).join("\n")}
      ],
    },`).join("\n")}
  ],
};

export const projects = {
  heading: "Réalisations",
  items: [
${projectItems.map((p) => `    {
      title: ${q(p.title)},
      description: ${q(p.description)},
      tags: ${arrStr(p.tags)},
      category: ${q(p.category)},
      github: ${q(p.github)},
      live: ${q(p.live)},
      featured: ${p.featured},${p.image ? `\n      image: ${q(p.image)},` : ""}
    },`).join("\n")}
  ],
};

export const formation = {
  heading: "Formation",
  intro: "Mon parcours académique suit une logique précise : comprendre le logiciel, puis maîtriser la donnée, puis exploiter l'intelligence artificielle. Chaque étape a été un choix délibéré.",
  items: [
${formations.map((f) => `    {
      degree: ${q(f.degree)},
      speciality: ${q(f.speciality)},
      school: ${q(f.school)},
      period: ${q(f.period)},
      description: ${q(f.description)},
    },`).join("\n")}
  ],
};

export const certifications = {
  heading: "Certifications",
  intro: "Plus de 20 certifications obtenues auprès des leaders mondiaux de la tech — IBM, NVIDIA, DeepLearning.AI, Cisco, Google. Chaque certification est un investissement délibéré dans ma montée en compétence.",
  items: [
${certs.map((c) => `    {
      name: ${q(c.name)},
      issuer: ${q(c.issuer)},
      date: ${q(c.date)},
      highlight: ${c.highlight},${c.image ? `\n      image: ${q(c.image)},` : ""}
    },`).join("\n")}
  ],
};

export const experience = {
  heading: "Expérience Professionnelle",
  items: [
${experiences.map((e) => `    {
      role: ${q(e.role)},
      company: ${q(e.company)},
      period: ${q(e.period)},
      description: ${q(e.description)},
      techs: ${arrStr(e.techs)},
    },`).join("\n")}
  ],
};

export const contact = {
  heading: "Contact",
  description: "Un projet data, une mission IA, une collaboration technique ? Je suis disponible pour transformer vos données en décisions.",
  quote: "Les meilleures architectures naissent de la rencontre entre la rigueur technique et la vision stratégique.",
};

export const metadata = {
  title: \`\${personal.firstName} \${personal.lastName} — \${personal.title}\`,
  description: hero.subtitle,
};
`;
  }

  // ─── Save to file ──────────────────────────────────────────
  async function handleSave() {
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const content = generateConfig();
      const res = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError(data.error || "Erreur lors de la sauvegarde");
      }
    } catch {
      setError("Erreur réseau");
    } finally {
      setSaving(false);
    }
  }

  // ─── UI helpers ────────────────────────────────────────────
  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-dim)] focus:border-[var(--color-primary)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/20 transition-all text-sm";
  const labelClass =
    "text-xs text-[var(--color-muted)] mb-2 block uppercase tracking-wider font-medium";

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "personal", label: "Infos Personnelles", icon: <FiUser size={16} /> },
    { id: "hero", label: "Hero / Accueil", icon: <FiCode size={16} /> },
    { id: "pillars" as Tab, label: "Profil Hybride", icon: <FiCode size={16} /> },
    { id: "skills" as Tab, label: "Expertise Technique", icon: <FiCode size={16} /> },
    { id: "experience", label: "Expérience", icon: <FiBriefcase size={16} /> },
    { id: "formation", label: "Formation", icon: <FiFileText size={16} /> },
    { id: "projects", label: "Projets", icon: <FiCode size={16} /> },
    { id: "certifications", label: "Certifications", icon: <FiAward size={16} /> },
    { id: "images", label: "Images", icon: <FiImage size={16} /> },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <FiLoader size={24} className="text-[var(--color-primary)] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border)] px-6 py-4 sticky top-0 z-50 bg-[var(--color-background)]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold gradient-text">LM.</span>
            <span className="text-sm text-[var(--color-muted)]">Administration</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadConfig}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
            >
              <FiRefreshCw size={14} /> Recharger
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-gradient text-white text-sm font-semibold disabled:opacity-50"
            >
              {saving ? (
                <><FiLoader size={14} className="animate-spin" /> Sauvegarde...</>
              ) : saved ? (
                <><FiCheck size={14} /> Sauvegardé !</>
              ) : (
                <><FiSave size={14} /> Sauvegarder</>
              )}
            </button>
            <a
              href="/"
              className="px-4 py-2 rounded-lg text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              Voir le site &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm">
            <FiAlertCircle size={16} />
            {error}
            <button onClick={() => setError(null)} className="ml-auto text-xs underline">Fermer</button>
          </div>
        </div>
      )}

      {/* Success banner */}
      {saved && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400 text-sm">
            <FiCheck size={16} />
            Configuration sauvegardée ! Rechargez le site pour voir les changements.
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <nav className="space-y-1 sticky top-24">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-light)]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="md:col-span-9 space-y-8">
            {/* ═══════ PERSONAL ═══════ */}
            {activeTab === "personal" && (
              <>
                <h2 className="text-2xl font-bold">Informations Personnelles</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {(
                    [
                      ["Prénom", "firstName"],
                      ["Nom", "lastName"],
                      ["Initiales", "initials"],
                      ["Titre", "title"],
                      ["Tagline", "tagline"],
                      ["Email", "email"],
                      ["Téléphone", "phone"],
                      ["Localisation", "location"],
                    ] as const
                  ).map(([label, key]) => (
                    <div key={key}>
                      <label className={labelClass}>{label}</label>
                      <input
                        value={personal[key]}
                        onChange={(e) => setPersonal({ ...personal, [key]: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  ))}
                  <div>
                    <label className={labelClass}>GitHub URL</label>
                    <input
                      value={personal.socials.github}
                      onChange={(e) => setPersonal({ ...personal, socials: { ...personal.socials, github: e.target.value } })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>LinkedIn URL</label>
                    <input
                      value={personal.socials.linkedin}
                      onChange={(e) => setPersonal({ ...personal, socials: { ...personal.socials, linkedin: e.target.value } })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Bio (3 paragraphes)</label>
                  <div className="space-y-3">
                    {personal.bio.map((b, i) => (
                      <textarea
                        key={i}
                        value={b}
                        onChange={(e) => {
                          const newBio = [...personal.bio];
                          newBio[i] = e.target.value;
                          setPersonal({ ...personal, bio: newBio });
                        }}
                        placeholder={`Paragraphe ${i + 1}...`}
                        rows={3}
                        className={inputClass + " resize-none"}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Valeurs</label>
                  {personal.values.map((v, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input
                        value={v}
                        onChange={(e) => {
                          const n = [...personal.values];
                          n[i] = e.target.value;
                          setPersonal({ ...personal, values: n });
                        }}
                        className={inputClass}
                      />
                      <button onClick={() => setPersonal({ ...personal, values: personal.values.filter((_, j) => j !== i) })} className="text-[var(--color-dim)] hover:text-red-400 px-2"><FiTrash2 size={14} /></button>
                    </div>
                  ))}
                  <button onClick={() => setPersonal({ ...personal, values: [...personal.values, ""] })} className="flex items-center gap-2 text-xs text-[var(--color-primary-light)] mt-2"><FiPlus size={12} /> Ajouter une valeur</button>
                </div>
              </>
            )}

            {/* ═══════ HERO ═══════ */}
            {activeTab === "hero" && (
              <>
                <h2 className="text-2xl font-bold">Section Hero / Accueil</h2>
                <div>
                  <label className={labelClass}>Badge (greeting)</label>
                  <input value={heroData.greeting} onChange={(e) => setHeroData({ ...heroData, greeting: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Sous-titre</label>
                  <textarea value={heroData.subtitle} onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })} rows={3} className={inputClass + " resize-none"} />
                </div>
                <div>
                  <label className={labelClass}>Bouton CTA</label>
                  <input value={heroData.cta} onChange={(e) => setHeroData({ ...heroData, cta: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Rôles (effet machine à écrire)</label>
                  {heroData.roles.map((r, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input value={r} onChange={(e) => { const n = [...heroData.roles]; n[i] = e.target.value; setHeroData({ ...heroData, roles: n }); }} className={inputClass} />
                      {heroData.roles.length > 1 && <button onClick={() => setHeroData({ ...heroData, roles: heroData.roles.filter((_, j) => j !== i) })} className="text-[var(--color-dim)] hover:text-red-400 px-2"><FiTrash2 size={14} /></button>}
                    </div>
                  ))}
                  <button onClick={() => setHeroData({ ...heroData, roles: [...heroData.roles, ""] })} className="flex items-center gap-2 text-xs text-[var(--color-primary-light)] mt-2"><FiPlus size={12} /> Ajouter un rôle</button>
                </div>
              </>
            )}

            {/* ═══════ PILLARS (Profil Hybride) ═══════ */}
            {activeTab === "pillars" && (
              <>
                <h2 className="text-2xl font-bold">Profil Hybride</h2>

                {/* Toggles */}
                <div className="p-5 rounded-2xl bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)] cursor-pointer">
                      <input type="checkbox" checked={showProfileType} onChange={(e) => setShowProfileType(e.target.checked)} className="accent-[var(--color-primary)] w-5 h-5" />
                      Afficher le profil INTJ-A sur le site
                    </label>
                    <span className="text-xs text-[var(--color-muted)]">{showProfileType ? "Activé" : "Désactivé"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)] cursor-pointer">
                      <input type="checkbox" checked={showTraitValues} onChange={(e) => setShowTraitValues(e.target.checked)} className="accent-[var(--color-primary)] w-5 h-5" />
                      Afficher les pourcentages des traits
                    </label>
                    <span className="text-xs text-[var(--color-muted)]">{showTraitValues ? "Activé" : "Désactivé"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)] cursor-pointer">
                      <input type="checkbox" checked={showPillars} onChange={(e) => setShowPillars(e.target.checked)} className="accent-[var(--color-primary)] w-5 h-5" />
                      Afficher les piliers sur le site
                    </label>
                    <span className="text-xs text-[var(--color-muted)]">{showPillars ? "Activé" : "Désactivé"}</span>
                  </div>
                </div>

                {/* INTJ-A Profile Type */}
                <div className="p-5 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                  <span className="text-sm font-semibold text-[var(--color-primary-light)]">Profil INTJ-A</span>
                  <div>
                    <label className={labelClass}>Description du profil</label>
                    <textarea value={profileTypeDesc} onChange={(e) => setProfileTypeDesc(e.target.value)} rows={3} className={inputClass + " resize-none"} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className={labelClass + " !mb-0"}>Traits de personnalité</label>
                      <button onClick={() => setTraits([...traits, { letter: "", name: "", value: 50 }])} className="text-xs text-[var(--color-primary-light)] flex items-center gap-1"><FiPlus size={12} /> Ajouter</button>
                    </div>
                    {traits.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 mb-2">
                        <input value={t.letter} onChange={(e) => { const n = [...traits]; n[i] = { ...n[i], letter: e.target.value }; setTraits(n); }} placeholder="Lettre" className={inputClass + " !w-16 text-center"} />
                        <input value={t.name} onChange={(e) => { const n = [...traits]; n[i] = { ...n[i], name: e.target.value }; setTraits(n); }} placeholder="Nom" className={inputClass} />
                        <input type="number" min={0} max={100} value={t.value} onChange={(e) => { const n = [...traits]; n[i] = { ...n[i], value: Number(e.target.value) }; setTraits(n); }} className={inputClass + " !w-20"} />
                        <span className="text-xs text-[var(--color-dim)]">%</span>
                        <button onClick={() => setTraits(traits.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={12} /></button>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className={labelClass}>Vision</label>
                    <textarea value={aboutVision} onChange={(e) => setAboutVision(e.target.value)} rows={2} className={inputClass + " resize-none"} />
                  </div>
                </div>

                {/* Pillars */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Piliers</h3>
                  <button onClick={() => { setPillars([...pillars, { title: "", icon: "code", description: "" }]); scrollToNew(); }} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--color-primary-light)]"><FiPlus size={14} /> Ajouter</button>
                </div>
                {pillars.map((p, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-primary-light)]">Pilier {i + 1}</span>
                      <button onClick={() => setPillars(pillars.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={14} /></button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className={labelClass}>Titre</label><input value={p.title} onChange={(e) => { const n = [...pillars]; n[i] = { ...n[i], title: e.target.value }; setPillars(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Icône</label><select value={p.icon} onChange={(e) => { const n = [...pillars]; n[i] = { ...n[i], icon: e.target.value }; setPillars(n); }} className={inputClass}><option value="code">code</option><option value="database">database</option><option value="brain">brain</option><option value="terminal">terminal</option><option value="cloud">cloud</option><option value="shield">shield</option></select></div>
                    </div>
                    <div><label className={labelClass}>Description</label><textarea value={p.description} onChange={(e) => { const n = [...pillars]; n[i] = { ...n[i], description: e.target.value }; setPillars(n); }} rows={3} className={inputClass + " resize-none"} /></div>
                  </div>
                ))}
              </>
            )}

            {/* ═══════ SKILLS (Expertise Technique) ═══════ */}
            {activeTab === "skills" && (
              <>
                <h2 className="text-2xl font-bold">Expertise Technique</h2>
                <div className="p-5 rounded-2xl bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/20 flex items-center justify-between">
                  <label className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)] cursor-pointer">
                    <input type="checkbox" checked={showLevels} onChange={(e) => setShowLevels(e.target.checked)} className="accent-[var(--color-primary)] w-5 h-5" />
                    Afficher les pourcentages de maîtrise sur le site
                  </label>
                  <span className="text-xs text-[var(--color-muted)]">{showLevels ? "Activé" : "Désactivé"}</span>
                </div>
                <div className="p-5 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                  <span className="text-sm font-semibold text-[var(--color-primary-light)]">Chaîne de valeur Data</span>
                  <div className="flex flex-wrap gap-2">
                    {skillChainSteps.map((s, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <input value={s} onChange={(e) => { const n = [...skillChainSteps]; n[i] = e.target.value; setSkillChainSteps(n); }} className={inputClass + " !w-36"} />
                        {skillChainSteps.length > 1 && <button onClick={() => setSkillChainSteps(skillChainSteps.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={12} /></button>}
                      </div>
                    ))}
                    <button onClick={() => setSkillChainSteps([...skillChainSteps, ""])} className="text-xs text-[var(--color-primary-light)]"><FiPlus size={12} /></button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Catégories</h3>
                  <button onClick={() => { setSkillCategories([...skillCategories, { title: "", icon: "terminal", items: [{ name: "", level: 50 }] }]); scrollToNew(); }} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--color-primary-light)]"><FiPlus size={14} /> Ajouter une catégorie</button>
                </div>
                {skillCategories.map((cat, ci) => (
                  <div key={ci} className="p-5 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-primary-light)]">{cat.title || `Catégorie ${ci + 1}`}</span>
                      <button onClick={() => setSkillCategories(skillCategories.filter((_, j) => j !== ci))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={14} /></button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className={labelClass}>Titre</label><input value={cat.title} onChange={(e) => { const n = [...skillCategories]; n[ci] = { ...n[ci], title: e.target.value }; setSkillCategories(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Icône</label><select value={cat.icon} onChange={(e) => { const n = [...skillCategories]; n[ci] = { ...n[ci], icon: e.target.value }; setSkillCategories(n); }} className={inputClass}><option value="terminal">terminal</option><option value="database">database</option><option value="brain">brain</option><option value="code">code</option><option value="cloud">cloud</option></select></div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className={labelClass + " !mb-0"}>Compétences</label>
                        <button onClick={() => { const n = [...skillCategories]; n[ci] = { ...n[ci], items: [...n[ci].items, { name: "", level: 50 }] }; setSkillCategories(n); }} className="text-xs text-[var(--color-primary-light)] flex items-center gap-1"><FiPlus size={12} /> Ajouter</button>
                      </div>
                      {cat.items.map((item, ii) => (
                        <div key={ii} className="flex items-center gap-2 mb-2">
                          <input value={item.name} onChange={(e) => { const n = [...skillCategories]; const items = [...n[ci].items]; items[ii] = { ...items[ii], name: e.target.value }; n[ci] = { ...n[ci], items }; setSkillCategories(n); }} placeholder="Nom" className={inputClass} />
                          <input type="number" min={0} max={100} value={item.level} onChange={(e) => { const n = [...skillCategories]; const items = [...n[ci].items]; items[ii] = { ...items[ii], level: Number(e.target.value) }; n[ci] = { ...n[ci], items }; setSkillCategories(n); }} className={inputClass + " !w-20"} />
                          <span className="text-xs text-[var(--color-dim)]">%</span>
                          <button onClick={() => { const n = [...skillCategories]; n[ci] = { ...n[ci], items: n[ci].items.filter((_, j) => j !== ii) }; setSkillCategories(n); }} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={12} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* ═══════ EXPERIENCE ═══════ */}
            {activeTab === "experience" && (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Expérience Professionnelle</h2>
                  <button onClick={() => { setExperiences([...experiences, { role: "", company: "", period: "", description: "", techs: [] }]); scrollToNew(); }} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--color-primary-light)]"><FiPlus size={14} /> Ajouter</button>
                </div>
                {experiences.map((exp, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-primary-light)]">Expérience {i + 1}</span>
                      <button onClick={() => setExperiences(experiences.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={14} /></button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className={labelClass}>Poste</label><input value={exp.role} onChange={(e) => { const n = [...experiences]; n[i] = { ...n[i], role: e.target.value }; setExperiences(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Entreprise</label><input value={exp.company} onChange={(e) => { const n = [...experiences]; n[i] = { ...n[i], company: e.target.value }; setExperiences(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Période</label><input value={exp.period} onChange={(e) => { const n = [...experiences]; n[i] = { ...n[i], period: e.target.value }; setExperiences(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Technologies (virgule)</label><input value={exp.techs.join(", ")} onChange={(e) => { const n = [...experiences]; n[i] = { ...n[i], techs: e.target.value.split(",").map((t) => t.trim()) }; setExperiences(n); }} className={inputClass} /></div>
                    </div>
                    <div><label className={labelClass}>Description</label><textarea value={exp.description} onChange={(e) => { const n = [...experiences]; n[i] = { ...n[i], description: e.target.value }; setExperiences(n); }} rows={4} className={inputClass + " resize-none"} /></div>
                  </div>
                ))}
              </>
            )}

            {/* ═══════ FORMATION ═══════ */}
            {activeTab === "formation" && (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Formation</h2>
                  <button onClick={() => { setFormations([...formations, { degree: "", speciality: "", school: "", period: "", description: "" }]); scrollToNew(); }} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--color-primary-light)]"><FiPlus size={14} /> Ajouter</button>
                </div>
                {formations.map((f, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[var(--color-primary-light)]">Formation {i + 1}</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              if (i === 0) return;
                              const n = [...formations];
                              [n[i - 1], n[i]] = [n[i], n[i - 1]];
                              setFormations(n);
                            }}
                            disabled={i === 0}
                            className="p-1 rounded text-[var(--color-dim)] hover:text-[var(--color-primary-light)] disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                            title="Monter"
                          ><FiChevronUp size={14} /></button>
                          <button
                            onClick={() => {
                              if (i === formations.length - 1) return;
                              const n = [...formations];
                              [n[i], n[i + 1]] = [n[i + 1], n[i]];
                              setFormations(n);
                            }}
                            disabled={i === formations.length - 1}
                            className="p-1 rounded text-[var(--color-dim)] hover:text-[var(--color-primary-light)] disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                            title="Descendre"
                          ><FiChevronDown size={14} /></button>
                        </div>
                      </div>
                      <button onClick={() => setFormations(formations.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={14} /></button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className={labelClass}>Diplôme</label><input value={f.degree} onChange={(e) => { const n = [...formations]; n[i] = { ...n[i], degree: e.target.value }; setFormations(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Spécialité</label><input value={f.speciality} onChange={(e) => { const n = [...formations]; n[i] = { ...n[i], speciality: e.target.value }; setFormations(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>École</label><input value={f.school} onChange={(e) => { const n = [...formations]; n[i] = { ...n[i], school: e.target.value }; setFormations(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Période</label><input value={f.period} onChange={(e) => { const n = [...formations]; n[i] = { ...n[i], period: e.target.value }; setFormations(n); }} className={inputClass} /></div>
                    </div>
                    <div><label className={labelClass}>Description</label><textarea value={f.description} onChange={(e) => { const n = [...formations]; n[i] = { ...n[i], description: e.target.value }; setFormations(n); }} rows={3} className={inputClass + " resize-none"} /></div>
                  </div>
                ))}
              </>
            )}

            {/* ═══════ PROJECTS ═══════ */}
            {activeTab === "projects" && (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Projets</h2>
                  <button onClick={() => { setProjectItems([...projectItems, { title: "", description: "", tags: [], category: "", github: "", live: "", featured: false }]); scrollToNew(); }} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--color-primary-light)]"><FiPlus size={14} /> Ajouter</button>
                </div>
                {projectItems.map((p, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-primary-light)]">Projet {i + 1}</span>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-xs text-[var(--color-muted)] cursor-pointer">
                          <input type="checkbox" checked={p.featured} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], featured: e.target.checked }; setProjectItems(n); }} className="accent-[var(--color-primary)]" />
                          En vedette
                        </label>
                        <button onClick={() => setProjectItems(projectItems.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={14} /></button>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className={labelClass}>Titre</label><input value={p.title} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], title: e.target.value }; setProjectItems(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Catégorie</label><input value={p.category} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], category: e.target.value }; setProjectItems(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Technologies (virgule)</label><input value={p.tags.join(", ")} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], tags: e.target.value.split(",").map((t) => t.trim()) }; setProjectItems(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Image</label><select value={p.image || ""} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], image: e.target.value }; setProjectItems(n); }} className={inputClass}><option value="">-- Sélectionner une image --</option>{images.projects.map((src) => (<option key={src} value={src}>{src.split("/").pop()}</option>))}</select></div>
                      <div><label className={labelClass}>GitHub</label><input value={p.github} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], github: e.target.value }; setProjectItems(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Live URL</label><input value={p.live} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], live: e.target.value }; setProjectItems(n); }} className={inputClass} /></div>
                    </div>
                    <div><label className={labelClass}>Description</label><textarea value={p.description} onChange={(e) => { const n = [...projectItems]; n[i] = { ...n[i], description: e.target.value }; setProjectItems(n); }} rows={4} className={inputClass + " resize-none"} /></div>
                  </div>
                ))}
              </>
            )}

            {/* ═══════ CERTIFICATIONS ═══════ */}
            {activeTab === "certifications" && (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Certifications</h2>
                  <button onClick={() => { setCerts([...certs, { name: "", issuer: "", date: "", highlight: false }]); scrollToNew(); }} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-[var(--color-primary-light)]"><FiPlus size={14} /> Ajouter</button>
                </div>
                {certs.map((c, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-primary-light)]">Certification {i + 1}</span>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-xs text-[var(--color-muted)] cursor-pointer">
                          <input type="checkbox" checked={c.highlight} onChange={(e) => { const n = [...certs]; n[i] = { ...n[i], highlight: e.target.checked }; setCerts(n); }} className="accent-[var(--color-primary)]" />
                          Mise en avant
                        </label>
                        <button onClick={() => setCerts(certs.filter((_, j) => j !== i))} className="text-[var(--color-dim)] hover:text-red-400"><FiTrash2 size={14} /></button>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className={labelClass}>Nom</label><input value={c.name} onChange={(e) => { const n = [...certs]; n[i] = { ...n[i], name: e.target.value }; setCerts(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Organisme</label><input value={c.issuer} onChange={(e) => { const n = [...certs]; n[i] = { ...n[i], issuer: e.target.value }; setCerts(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Date</label><input value={c.date} onChange={(e) => { const n = [...certs]; n[i] = { ...n[i], date: e.target.value }; setCerts(n); }} className={inputClass} /></div>
                      <div><label className={labelClass}>Image</label><select value={c.image || ""} onChange={(e) => { const n = [...certs]; n[i] = { ...n[i], image: e.target.value }; setCerts(n); }} className={inputClass}><option value="">-- Sélectionner une image --</option>{images.certs.map((src) => (<option key={src} value={src}>{src.split("/").pop()}</option>))}</select></div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* ═══════ IMAGES ═══════ */}
            {activeTab === "images" && (
              <>
                <h2 className="text-2xl font-bold">Gestion des Images</h2>

                {/* Profile photo upload */}
                <div className="p-6 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)]">
                  <h3 className="text-sm font-semibold text-[var(--color-primary-light)] mb-4 flex items-center gap-2">
                    <FiUser size={16} /> Photo de profil
                  </h3>
                  <div className="flex items-center gap-6">
                    {images.profile.length > 0 ? (
                      <img src={images.profile[0]} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-[var(--color-primary)]/30" />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-[var(--color-surface)] border-2 border-dashed border-[var(--color-border)] flex items-center justify-center text-[var(--color-dim)]">
                        <FiUser size={24} />
                      </div>
                    )}
                    <div>
                      <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors cursor-pointer">
                        <FiImage size={14} />
                        {uploadingTo === "images/profile.jpg" ? "Upload en cours..." : "Choisir une photo"}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) await handleUpload(file, "images/profile.jpg");
                          }}
                        />
                      </label>
                      <p className="text-xs text-[var(--color-dim)] mt-2">500x500px recommandé, JPG ou PNG</p>
                    </div>
                  </div>
                </div>

                {/* Certificates upload */}
                <div className="p-6 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)]">
                  <h3 className="text-sm font-semibold text-[var(--color-primary-light)] mb-4 flex items-center gap-2">
                    <FiAward size={16} /> Certificats
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {images.certs.map((src) => (
                      <div key={src} className="relative group">
                        <img src={src} alt="" className="w-full h-24 object-cover rounded-lg border border-[var(--color-border)]" />
                        <p className="text-[10px] text-[var(--color-dim)] mt-1 truncate">{src.split("/").pop()}</p>
                      </div>
                    ))}
                  </div>
                  <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors cursor-pointer inline-flex">
                    <FiPlus size={14} />
                    {uploadingTo?.startsWith("images/certs/") ? "Upload en cours..." : "Ajouter un certificat"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const name = file.name.toLowerCase().replace(/\s+/g, "-");
                          await handleUpload(file, `images/certs/${name}`);
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Projects upload */}
                <div className="p-6 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-border)]">
                  <h3 className="text-sm font-semibold text-[var(--color-primary-light)] mb-4 flex items-center gap-2">
                    <FiCode size={16} /> Screenshots de projets
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {images.projects.map((src) => (
                      <div key={src} className="relative group">
                        <img src={src} alt="" className="w-full h-24 object-cover rounded-lg border border-[var(--color-border)]" />
                        <p className="text-[10px] text-[var(--color-dim)] mt-1 truncate">{src.split("/").pop()}</p>
                      </div>
                    ))}
                  </div>
                  <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors cursor-pointer inline-flex">
                    <FiPlus size={14} />
                    {uploadingTo?.startsWith("images/projects/") ? "Upload en cours..." : "Ajouter un screenshot"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const name = file.name.toLowerCase().replace(/\s+/g, "-");
                          await handleUpload(file, `images/projects/${name}`);
                        }
                      }}
                    />
                  </label>
                </div>
              </>
            )}

            <div ref={bottomRef} />
            {/* Save button bottom */}
            <div className="pt-4 border-t border-[var(--color-border)]">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-white text-sm font-semibold disabled:opacity-50"
              >
                {saving ? (
                  <><FiLoader size={14} className="animate-spin" /> Sauvegarde en cours...</>
                ) : saved ? (
                  <><FiCheck size={14} /> Sauvegardé avec succès !</>
                ) : (
                  <><FiSave size={14} /> Sauvegarder les modifications</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
