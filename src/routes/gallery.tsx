import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, CTAButton } from "@/components/ui-blocks";
import { ShieldCheck, Camera, X } from "lucide-react";
import { INITIATIVES } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | NetSecure Foundation Sessions & Campaigns" },
      { name: "description", content: "Photos from NetSecure Foundation's cyber awareness sessions, school campaigns, and public drives across Rajasthan." },
      { property: "og:title", content: "Photo Gallery | NetSecure Foundation" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Photo = { id: number; imageId: string; caption: string; venue: string; date: string; initiative: string };

const INITS = ["All", "Cyber Shiksha Abhiyan", "Digital Immunity Drive", "TechSHEcurity", "Cyber Vaccine"];

const PHOTOS: Photo[] = [];
let photoId = 1;

const DEFAULT_CAPTIONS = ["Session in progress", "Q&A with students", "Group photo", "Volunteer training", "Workshop kickoff", "Cyber safety drill"];

INITIATIVES.forEach((init) => {
  init.images?.forEach((imageId, idx) => {
    let caption = DEFAULT_CAPTIONS[idx % 6];
    let initiativeName = init.name;

    // Apply specific caption overrides based on user request
    if (init.name === "Cyber Shiksha Abhiyan") {
      if (idx === 0) caption = "Group Photo";
    } 
    else if (init.name === "Digital Immunity Drive") {
      if (idx === 0) caption = "Session Group photo";
      if (idx === 3) caption = "Individual Interactions";
    } 
    else if (init.name === "TechSHEcurity") {
      if (idx === 0 || idx === 1) {
        initiativeName = "Blood Donation Drive"; // This will only show in 'All' because there's no tab for it
        caption = idx === 0 ? "Blood Donation Drive" : "Volunteer Support";
      } else {
        if (idx === 4) caption = "Session insights";
        if (idx === 5) caption = "Individual Interactions";
        if (idx === 8) caption = "Session highlights";
      }
    } 
    else if (init.name === "Cyber Vaccine") {
      if (idx === 2) caption = "Certificate Distribution";
    }

    PHOTOS.push({
      id: photoId++,
      imageId: imageId,
      caption: caption,
      venue: "Various Locations",
      date: "2026",
      initiative: initiativeName,
    });
  });
});

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const filtered = useMemo(() => filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.initiative === filter), [filter]);

  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="On the ground, across Rajasthan." subtitle="Moments from our workshops, drives and school visits." />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {INITS.map((i) => (
            <button key={i} onClick={() => setFilter(i)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === i ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-muted"}`}>{i}</button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
            <Camera className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">No photos in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <button key={p.id} onClick={() => setLightbox(p)} className="group overflow-hidden rounded-xl text-left relative aspect-square bg-muted">
                <img 
                  src={`https://lh3.googleusercontent.com/d/${p.imageId}`} 
                  referrerPolicy="no-referrer" 
                  alt={p.caption} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                  <div className="font-semibold text-sm">{p.caption}</div>
                  <div className="opacity-80 mt-1">{p.initiative}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        <p className="mt-8 text-xs text-muted-foreground">📸 Safeguarding notice: No identifiable minor faces are published without written consent.</p>
        <div className="mt-10 text-center">
          <CTAButton to="/contact" variant="primary">Request a session for your institution</CTAButton>
        </div>
      </Section>

      {lightbox && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
          <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <div className="max-w-4xl w-full rounded-2xl bg-black p-2 md:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
               <img 
                  src={`https://lh3.googleusercontent.com/d/${lightbox.imageId}`} 
                  referrerPolicy="no-referrer" 
                  alt={lightbox.caption} 
                  className="max-h-full max-w-full object-contain" 
               />
            </div>
            <div className="mt-4 text-white">
              <h3 className="font-display text-xl font-bold">{lightbox.caption}</h3>
              <p className="mt-1 text-sm text-white/70">{lightbox.initiative} · {lightbox.date}</p>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
